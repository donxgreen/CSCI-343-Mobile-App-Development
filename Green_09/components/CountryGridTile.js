import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export default function CountryGridTile({ country, onPress }) {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        testID={`country-${country.id}`}
        accessibilityRole="button"
        accessibilityLabel={country.name}
        accessibilityHint="Shows vacation destinations in this country"
        onPress={onPress}
        style={({ pressed }) => [
          styles.tile,
          { backgroundColor: country.backgroundColor },
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.countryName}>{country.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: { flex: 1, margin: 7 },
  tile: {
    minHeight: 132,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryName: {
    color: Colors.white,
    fontFamily: 'Barlow-SemiBold',
    fontSize: 21,
    textAlign: 'center',
  },
  pressed: { opacity: 0.75 },
});
