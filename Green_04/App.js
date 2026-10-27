import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MovieItem from './components/MovieItem';
import colors from './constants/colors';
import { MOVIES } from './data/movies';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.navy} />
      <SafeAreaView style={styles.screen}>
        <View style={styles.header} testID="app-header">
          <View style={styles.headerContent}>
            <Text style={styles.title} accessibilityRole="header" testID="app-title">Top 10 Movies</Text>
            <Text style={styles.subtitle} testID="app-subtitle">Movie picks | Ratings out of 10</Text>
          </View>
        </View>
        {/* FlatList scrolls the array and supplies each reusable card's displayed rank. */}
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={MOVIES}
          keyExtractor={(movie) => movie.id}
          renderItem={({ item, index }) => <MovieItem movie={item} rank={index + 1} />}
          testID="movie-list"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.navy },
  header: { backgroundColor: colors.navy, paddingHorizontal: 20, paddingVertical: 23 },
  headerContent: { width: '100%', maxWidth: 860, alignSelf: 'center' },
  title: { color: colors.white, fontSize: 30, lineHeight: 37, fontWeight: '700' },
  subtitle: { color: colors.gold, fontSize: 14, lineHeight: 21, marginTop: 5 },
  list: { flex: 1, backgroundColor: colors.cream },
  listContent: { width: '100%', maxWidth: 900, alignSelf: 'center', padding: 16, paddingBottom: 24 },
});
