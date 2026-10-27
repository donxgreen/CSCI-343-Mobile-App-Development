import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// The list passes one movie object into this card, keeping all ten rows consistent.
export default function MovieItem({ movie, rank }) {
  return (
    <View style={styles.card} testID={`movie-${movie.id}`}>
      <Image
        source={movie.poster}
        style={styles.poster}
        resizeMode="cover"
        accessibilityLabel={`${movie.title} movie poster`}
        testID={`poster-${movie.id}`}
      />
      <View style={styles.information}>
        <Text style={styles.rank} testID={`movie-rank-${movie.id}`}>#{String(rank).padStart(2, '0')}</Text>
        <Text style={styles.title} accessibilityRole="header" testID={`movie-title-${movie.id}`}>{movie.title}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingLabel} testID={`rating-label-${movie.id}`}>Rating</Text>
          <Text style={styles.ratingValue} testID={`rating-value-${movie.id}`}>{movie.rating.toFixed(1)} / 10</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    backgroundColor: colors.white,
  },
  poster: { width: 108, height: 162, borderRadius: 7, backgroundColor: colors.border },
  // Long titles wrap and grow the row rather than clipping on a narrow phone.
  information: { flex: 1, minWidth: 0, marginLeft: 17 },
  rank: { color: colors.muted, fontSize: 12, lineHeight: 18, fontWeight: '700', letterSpacing: 1 },
  title: { color: colors.ink, fontSize: 20, lineHeight: 26, fontWeight: '700', marginTop: 5 },
  rating: {
    alignSelf: 'flex-start',
    marginTop: 16,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.paleGold,
  },
  ratingLabel: { color: colors.muted, fontSize: 12, lineHeight: 17 },
  ratingValue: { color: colors.ink, fontSize: 17, lineHeight: 23, fontWeight: '700' },
});
