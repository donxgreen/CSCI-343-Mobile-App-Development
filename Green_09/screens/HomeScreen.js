import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CountryGridTile from '../components/CountryGridTile';
import Colors from '../constants/colors';
import { COUNTRIES } from '../data/dummy-data';

export default function HomeScreen({ navigation }) {
  function showDestinations(country) {
    navigation.navigate('DestinationsOverview', {
      countryId: country.id,
      countryName: country.name,
    });
  }

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(country) => country.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CountryGridTile country={item} onPress={() => showDestinations(item)} />
        )}
        ListHeaderComponent={<Text style={styles.instruction}>Select a country to explore.</Text>}
        contentContainerStyle={styles.gridContent}
        style={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.cream },
  grid: { width: '100%', maxWidth: 900, alignSelf: 'center' },
  gridContent: { padding: 9, paddingBottom: 20 },
  instruction: {
    color: Colors.navy,
    fontFamily: 'Barlow-Regular',
    fontSize: 18,
    paddingHorizontal: 7,
    paddingVertical: 14,
  },
});
