import { useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import Colors from './constants/colors';
import { MENU_ITEMS, RESTAURANT } from './data/restaurant';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  // Section 5 chooses between pages with state rather than a navigation library.
  const [currentScreen, setCurrentScreen] = useState('home');
  // Wait for both bundled fonts before displaying screens that use them.
  const [fontsLoaded, fontError] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf'),
  });

  let content = (
    <View style={styles.centered} testID="font-loading">
      <ActivityIndicator color={Colors.teal} size="large" />
      <Text style={styles.loadingText}>Loading Coastal Table…</Text>
    </View>
  );

  if (fontError) {
    content = (
      <View style={styles.centered} testID="font-error">
        <Text style={styles.loadingText}>The app fonts could not load. Please restart the app.</Text>
      </View>
    );
  } else if (fontsLoaded) {
    content = currentScreen === 'menu' ? (
      <MenuScreen restaurantName={RESTAURANT.name} menuItems={MENU_ITEMS} onHome={() => setCurrentScreen('home')} />
    ) : (
      <HomeScreen restaurant={RESTAURANT} onViewMenu={() => setCurrentScreen('menu')} />
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.app}>{content}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: Colors.cream },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  loadingText: { fontSize: 17, lineHeight: 24, color: Colors.ink, textAlign: 'center', marginTop: 14 },
});
