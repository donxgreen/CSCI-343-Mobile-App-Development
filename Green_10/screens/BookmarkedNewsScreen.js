import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';

export default function BookmarkedNewsScreen() {
  return <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']} testID="bookmarked-news-screen" />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
});
