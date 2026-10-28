import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { NEWS } from '../data/dummy-data';
import ListItem from './ListItem';

export default function List({ category, navigation, newsItems, emptyMessage }) {
  // Category tabs filter the dummy data; Bookmarks supplies its selected articles.
  const displayedNews = newsItems ?? NEWS.filter((newsItem) => newsItem.category === category);

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={displayedNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={emptyMessage ? (
          <View style={styles.emptyContainer} testID="bookmarks-empty">
            <Text style={styles.emptyTitle}>No bookmarked news yet.</Text>
            <Text style={styles.emptyMessage}>{emptyMessage}</Text>
          </View>
        ) : null}
        testID={`news-list-${category ?? 'bookmarks'}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  listContent: { width: '100%', maxWidth: 900, alignSelf: 'center', padding: 16, paddingBottom: 24 },
  emptyContainer: { paddingVertical: 36, paddingHorizontal: 12, alignItems: 'center' },
  emptyTitle: { fontFamily: 'Barlow-SemiBold', fontSize: 21, lineHeight: 28, color: colors.ink, textAlign: 'center' },
  emptyMessage: { fontFamily: 'Barlow-Regular', fontSize: 17, lineHeight: 25, color: colors.muted, textAlign: 'center', marginTop: 12 },
});
