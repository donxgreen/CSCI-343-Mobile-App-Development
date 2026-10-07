import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import WheelPicker from './WheelControl';
import Colors from '../constants/colors';

export default function WheelSelection({ visible, title, value, options, onConfirm, onClose }) {
  const [draftIndex, setDraftIndex] = useState(value - 1);
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (visible) setDraftIndex(value - 1);
  }, [visible, value]);

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
            <WheelPicker
              key={height < 500 ? 'compact' : 'regular'}
              selectedIndex={draftIndex}
              options={options}
              onChange={setDraftIndex}
              visibleRest={height < 500 ? 1 : 2}
              itemHeight={44}
              containerStyle={styles.wheel}
              itemTextStyle={styles.itemText}
              selectedIndicatorStyle={styles.indicator}
            />
            <View style={styles.actions}>
              <Pressable accessibilityRole="button" onPress={onClose} style={styles.cancel}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                testID="wheel-confirm"
                onPress={() => onConfirm(draftIndex + 1)}
                style={styles.confirm}
              >
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
  card: { flexGrow: 0, width: '100%', maxWidth: 420, maxHeight: '100%', backgroundColor: Colors.cream, borderRadius: 20 },
  content: { padding: 20 },
  title: { fontFamily: 'Barlow-SemiBold', fontSize: 24, color: Colors.primary, textAlign: 'center', marginBottom: 12 },
  wheel: { width: '100%' },
  itemText: { fontFamily: 'Barlow-Regular', fontSize: 22, color: Colors.ink },
  indicator: { backgroundColor: 'rgba(20, 60, 52, 0.1)', borderRadius: 8 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 18 },
  cancel: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.primary, borderRadius: 10 },
  confirm: { flex: 1, minHeight: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary, borderRadius: 10 },
  cancelText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.primary },
  confirmText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.cream },
});
