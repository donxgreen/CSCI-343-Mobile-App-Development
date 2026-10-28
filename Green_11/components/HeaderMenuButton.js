import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';

export default function HeaderMenuButton({ onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Open navigation menu"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      testID="open-drawer"
    >
      <Ionicons name="menu-outline" size={28} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center', marginLeft: 6 },
  pressed: { opacity: 0.6 },
});
