import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DestinationItem from '../components/DestinationItem';
import DestinationModal from '../components/DestinationModal';
import Colors from '../constants/colors';
import { DESTINATIONS } from '../data/dummy-data';

export default function DestinationsOverviewScreen({ route }) {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const destinations = DESTINATIONS.filter(
    (destination) => destination.countryId === route.params.countryId,
  );

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={destinations}
        keyExtractor={(destination) => destination.id}
        renderItem={({ item }) => (
          <DestinationItem destination={item} onPress={() => setSelectedDestination(item)} />
        )}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.cream },
  list: { width: '100%', maxWidth: 900, alignSelf: 'center' },
  listContent: { padding: 16 },
});
