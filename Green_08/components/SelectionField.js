import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function SelectionField({ label, value, accessibilityLabel, testID, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${accessibilityLabel}. ${value}`}
      testID={testID}
      onPress={onPress}
      style={({ pressed }) => [styles.field, pressed && styles.pressed]}
    >
      <View style={styles.copy}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Text accessibilityElementsHidden importantForAccessibility="no" style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: {
    minHeight: 90,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.line,
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  copy: { flex: 1 },
  label: { fontFamily: 'Barlow-SemiBold', fontSize: 17, color: Colors.ink, marginBottom: 5 },
  value: { fontFamily: 'Barlow-Regular', fontSize: 18, lineHeight: 24, color: Colors.muted },
  arrow: { fontFamily: 'Barlow-Regular', fontSize: 30, color: Colors.primary, marginLeft: 12 },
  pressed: { backgroundColor: '#EBF0E7' },
});
