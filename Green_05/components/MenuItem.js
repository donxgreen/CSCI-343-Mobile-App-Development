import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

export default function MenuItem({ item }) {
  return (
    <View style={styles.card} testID={`menu-item-${item.id}`}>
      <Image
        source={item.image}
        accessibilityLabel={item.name}
        style={styles.image}
        resizeMode="cover"
        testID={`menu-image-${item.id}`}
      />
      <View style={styles.details}>
        <Text style={styles.name} testID={`menu-name-${item.id}`}>{item.name}</Text>
        {/* Prices stay numeric in the data and gain two currency decimals here. */}
        <Text style={styles.price} testID={`menu-price-${item.id}`}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
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
  image: { width: 110, height: 110, borderRadius: 11, backgroundColor: Colors.border },
  details: { flex: 1, paddingLeft: 16 },
  name: { fontFamily: 'Barlow-SemiBold', fontSize: 21, lineHeight: 27, color: Colors.ink },
  price: { fontFamily: 'Barlow-SemiBold', fontSize: 23, lineHeight: 29, color: Colors.coral, marginTop: 10 },
});
