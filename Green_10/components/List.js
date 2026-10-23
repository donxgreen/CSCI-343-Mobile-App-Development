import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { NEWS } from '../data/dummy-data';
import ListItem from './ListItem';

export default function List({ category, navigation }) {
  const categoryNews = NEWS.filter((newsItem) => newsItem.category === category);

  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <FlatList
        data={categoryNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
          />
        )}
        contentContainerStyle={styles.listContent}
        testID={`news-list-${category}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  listContent: { width: '100%', maxWidth: 900, alignSelf: 'center', padding: 16, paddingBottom: 24 },
});
