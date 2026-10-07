import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

function dateInputValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function timeInputValue(date) {
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

// Browser preview only. Android/iOS resolve DateTimeSelection.native.js.
export default function DateTimeSelection({ visible, title, value, onConfirm, onClose }) {
  const [dateText, setDateText] = useState(dateInputValue(value));
  const [timeText, setTimeText] = useState(timeInputValue(value));

  useEffect(() => {
    if (visible) {
      setDateText(dateInputValue(value));
      setTimeText(timeInputValue(value));
    }
  }, [visible, value]);

  function confirmSelection() {
    const [year, month, day] = dateText.split('-').map(Number);
    const [hour, minute] = timeText.split(':').map(Number);
    onConfirm(new Date(year, month - 1, day, hour, minute));
  }

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <ScrollView style={styles.card} contentContainerStyle={styles.content}>
          <Text accessibilityRole="header" style={styles.title}>{title}</Text>
          <Text style={styles.label}>Date</Text>
          <input
            aria-label={`${title} date`}
            type="date"
            value={dateText}
            onChange={(event) => setDateText(event.target.value)}
            style={inputStyle}
          />
          <Text style={styles.label}>Time</Text>
          <input
            aria-label={`${title} time`}
            type="time"
            value={timeText}
            onChange={(event) => setTimeText(event.target.value)}
            style={inputStyle}
          />
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" onPress={onClose} style={styles.cancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              disabled={!dateText || !timeText}
              onPress={confirmSelection}
              style={[styles.confirm, (!dateText || !timeText) && styles.disabled]}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const inputStyle = {
  boxSizing: 'border-box', width: '100%', minHeight: 48, padding: '10px 12px',
  border: `1px solid ${Colors.line}`, borderRadius: 8, backgroundColor: Colors.white,
  color: Colors.primary, fontFamily: 'Barlow-Regular, sans-serif', fontSize: 18,
};

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(5, 22, 16, 0.72)', padding: 18 },
  card: { flexGrow: 0, width: '100%', maxWidth: 440, maxHeight: '100%', backgroundColor: Colors.cream, borderRadius: 20 },
  content: { padding: 20 },
  title: { fontFamily: 'Barlow-SemiBold', fontSize: 24, color: Colors.primary, textAlign: 'center', marginBottom: 12 },
  label: { fontFamily: 'Barlow-SemiBold', fontSize: 17, color: Colors.primary, marginTop: 12, marginBottom: 8 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 22 },
  cancel: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.primary, borderRadius: 10 },
  confirm: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 10 },
  cancelText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.primary },
  confirmText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.cream },
  disabled: { opacity: 0.5 },
});
