import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import List from '../components/List';
import { NEWS } from '../data/dummy-data';
import { BookmarksContext } from '../store/context/bookmarks-context';

export default function BookmarksScreen({ navigation }) {
  const { ids } = useContext(BookmarksContext);
  // Deriving the list on each Context update immediately adds or removes cards.
  const bookmarkedNews = NEWS.filter((newsItem) => ids.includes(newsItem.id));

  return (
    <View style={styles.screen} testID="bookmarked-news-screen">
      <List
        newsItems={bookmarkedNews}
        navigation={navigation}
        emptyMessage="Open an article and tap the bookmark icon to save it here."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
