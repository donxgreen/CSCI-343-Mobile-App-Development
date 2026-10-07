import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

export default function ReserveButton({ onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      testID="reserve-button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>Reserve Now</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  text: { fontFamily: 'Barlow-SemiBold', fontSize: 20, color: Colors.primary },
  pressed: { opacity: 0.78 },
});
