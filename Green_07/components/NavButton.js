import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

export default function NavButton({ children, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: Colors.gold, borderRadius: 12, padding: 17, minHeight: 54, alignItems: 'center' },
  pressed: { opacity: 0.7 },
  label: { fontFamily: 'Barlow-SemiBold', fontSize: 19, color: Colors.dark },
});
