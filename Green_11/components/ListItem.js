import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

export default function ListItem({ item, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.headline}, ${item.date}`}
      accessibilityHint="Read this news article"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      testID={`news-${item.id}`}
    >
      <View style={styles.imageFrame}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" testID={`news-image-${item.id}`} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headline} testID={`news-headline-${item.id}`}>{item.headline}</Text>
        <Text style={styles.date} testID={`news-date-${item.id}`}>{item.date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    minHeight: 140,
    marginBottom: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  pressed: { opacity: 0.7 },
  imageFrame: { width: 108, backgroundColor: colors.border },
  image: { ...StyleSheet.absoluteFillObject },
  textContainer: { flex: 1, padding: 14, justifyContent: 'space-between' },
  headline: { fontFamily: 'Barlow-SemiBold', fontSize: 18, lineHeight: 24, color: colors.ink },
  date: { fontFamily: 'Barlow-Regular', fontSize: 14, lineHeight: 20, color: colors.muted, marginTop: 12 },
});
