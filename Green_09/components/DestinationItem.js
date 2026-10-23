import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export default function DestinationItem({ destination, onPress }) {
  return (
    <Pressable
      testID={`destination-${destination.id}`}
      accessibilityRole="button"
      accessibilityLabel={destination.name}
      accessibilityHint="Opens an image and description of this destination"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image
        source={{ uri: destination.imageUrl }}
        style={styles.image}
        accessibilityLabel={destination.name}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.name}>{destination.name}</Text>
        <Text style={styles.detail}>Avg. daily cost: ${destination.averageCost.toFixed(2)}</Text>
        <Text style={styles.detail}>Founded: {destination.yearFounded}</Text>
        <Text style={styles.detail}>Rating: {destination.averageRating.toFixed(1)} / 5</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
  },
  image: {
    width: 90,
    height: 124,
    borderRadius: 10,
    backgroundColor: Colors.border,
  },
  details: { flex: 1, marginLeft: 12 },
  name: {
    color: Colors.navy,
    fontFamily: 'Barlow-SemiBold',
    fontSize: 18,
    marginBottom: 8,
  },
  detail: {
    color: Colors.muted,
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  pressed: { opacity: 0.75 },
});
