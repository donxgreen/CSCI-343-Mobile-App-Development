import { useCallback, useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookmarkButton from '../components/BookmarkButton';
import colors from '../constants/colors';
import { NEWS } from '../data/dummy-data';
import { BookmarksContext } from '../store/context/bookmarks-context';

export default function ListingDetailScreen({ route, navigation }) {
  const { width } = useWindowDimensions();
  const newsItem = NEWS.find((item) => item.id === route.params?.newsId);
  const { ids, addBookmark, removeBookmark } = useContext(BookmarksContext);
  const newsId = newsItem?.id;
  const isBookmarked = ids.includes(newsId);

  const toggleBookmark = useCallback(() => {
    if (!newsId) return;
    if (isBookmarked) {
      removeBookmark(newsId);
    } else {
      addBookmark(newsId);
    }
  }, [newsId, isBookmarked, addBookmark, removeBookmark]);

  // Rebuilding the header from Context keeps its icon correct when reopening an article.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: newsItem ? () => (
        <BookmarkButton isBookmarked={isBookmarked} onPress={toggleBookmark} />
      ) : undefined,
    });
  }, [navigation, newsItem, isBookmarked, toggleBookmark]);

  if (!newsItem) {
    return (
      <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
        <Text style={styles.unavailable}>This news article is unavailable.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} testID="news-detail">
        <Image
          source={{ uri: newsItem.imageUrl }}
          style={[styles.image, { height: Math.max(180, Math.min(width * 0.58, 320)) }]}
          resizeMode="cover"
          accessibilityLabel={newsItem.headline}
          testID="detail-image"
        />
        <View style={styles.article}>
          <Text style={[styles.headline, width < 360 && styles.smallHeadline]} testID="detail-headline">{newsItem.headline}</Text>
          <Text style={styles.date} testID="detail-date">{newsItem.date}</Text>
          <View style={styles.byline}>
            <Text style={styles.author} testID="detail-author">By {newsItem.author}</Text>
            <Text style={styles.agency} testID="detail-agency">{newsItem.agency}</Text>
          </View>
          <Text style={styles.description} testID="detail-description">{newsItem.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { width: '100%', maxWidth: 900, alignSelf: 'center', padding: 16, paddingBottom: 28 },
  image: { width: '100%', borderRadius: 14, backgroundColor: colors.border },
  article: { paddingTop: 20 },
  headline: { fontFamily: 'Barlow-SemiBold', fontSize: 29, lineHeight: 36, color: colors.ink },
  smallHeadline: { fontSize: 25, lineHeight: 31 },
  date: { fontFamily: 'Barlow-Regular', fontSize: 15, lineHeight: 21, color: colors.muted, marginTop: 12 },
  byline: { marginTop: 16, paddingBottom: 18, borderBottomWidth: 2, borderBottomColor: colors.coral },
  author: { fontFamily: 'Barlow-SemiBold', fontSize: 16, lineHeight: 23, color: colors.ink },
  agency: { fontFamily: 'Barlow-Regular', fontSize: 15, lineHeight: 22, color: colors.muted, marginTop: 2 },
  description: { fontFamily: 'Barlow-Regular', fontSize: 18, lineHeight: 28, color: colors.ink, marginTop: 20 },
  unavailable: { fontFamily: 'Barlow-Regular', color: colors.ink, fontSize: 17, padding: 24 },
});
