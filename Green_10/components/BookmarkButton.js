import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={isBookmarked ? 'Remove bookmark' : 'Bookmark this article'}
      accessibilityState={{ selected: isBookmarked }}
      onPress={() => setIsBookmarked((current) => !current)}
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
