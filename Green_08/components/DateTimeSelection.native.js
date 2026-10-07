import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Colors from '../constants/colors';

export default function DateTimeSelection({ visible, title, value, onConfirm, onClose }) {
  const [draft, setDraft] = useState(value);
  const latest = useRef({ value, onConfirm, onClose });
  latest.current = { value, onConfirm, onClose };

  useEffect(() => {
    if (!visible) return;
    const initialValue = new Date(latest.current.value.getTime());
    setDraft(initialValue);

    if (Platform.OS !== 'android') return;

    // Android uses one native date dialog followed by one native time dialog.
    // The committed selection changes only after both confirmations.
    DateTimePickerAndroid.open({
      value: initialValue,
      mode: 'date',
      positiveButton: { label: 'Next' },
      onError: () => latest.current.onClose(),
      onChange: (dateEvent, selectedDate) => {
        if (dateEvent.type !== 'set' || !selectedDate) {
          latest.current.onClose();
          return;
        }

        const dateDraft = new Date(initialValue.getTime());
        dateDraft.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

        DateTimePickerAndroid.open({
          value: dateDraft,
          mode: 'time',
          positiveButton: { label: 'Confirm' },
          onError: () => latest.current.onClose(),
          onChange: (timeEvent, selectedTime) => {
            if (timeEvent.type !== 'set' || !selectedTime) {
              latest.current.onClose();
              return;
            }
            const confirmedDate = new Date(dateDraft.getTime());
            confirmedDate.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
            latest.current.onConfirm(confirmedDate);
          },
        });
      },
    });
  }, [visible]);

  if (Platform.OS === 'android') return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}
    >
      <View style={styles.backdrop}>
        <ScrollView style={styles.card} contentContainerStyle={styles.content} bounces={false}>
          <View accessibilityViewIsModal>
            <Text accessibilityRole="header" style={styles.title}>{title}</Text>
            <DateTimePicker
              value={draft}
              mode="datetime"
              display="spinner"
              themeVariant="light"
              textColor={Colors.primary}
              onChange={(_event, selectedDate) => {
                if (selectedDate) setDraft(selectedDate);
              }}
              style={styles.picker}
            />
            <View style={styles.actions}>
              <Pressable accessibilityRole="button" onPress={onClose} style={styles.cancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
              <Pressable accessibilityRole="button" onPress={() => onConfirm(draft)} style={styles.confirm}>
                <Text style={styles.confirmText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(5, 22, 16, 0.72)', padding: 18 },
  card: { flexGrow: 0, width: '100%', maxWidth: 540, maxHeight: '100%', backgroundColor: Colors.cream, borderRadius: 20 },
  content: { padding: 20 },
  title: { fontFamily: 'Barlow-SemiBold', fontSize: 24, color: Colors.primary, textAlign: 'center', marginBottom: 12 },
  picker: { width: '100%', height: 190 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 18 },
  cancel: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.primary, borderRadius: 10 },
  confirm: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 10 },
  cancelText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.primary },
  confirmText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.cream },
});
