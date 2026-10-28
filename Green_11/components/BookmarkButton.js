import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';

// This controlled button reflects Context state supplied by the detail screen.
export default function BookmarkButton({ isBookmarked, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={isBookmarked ? 'Remove bookmark' : 'Bookmark this article'}
      accessibilityState={{ selected: isBookmarked }}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      testID="bookmark-button"
    >
      <Ionicons name={isBookmarked ? 'bookmark' : 'bookmark-outline'} color={colors.white} size={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.6 },
});
