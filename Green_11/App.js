import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import colors from './constants/colors';
import NewsDrawerNavigator from './navigation/NewsDrawerNavigator';
import ListingDetailScreen from './screens/ListingDetailScreen';
import BookmarksContextProvider from './store/context/bookmarks-context';

SplashScreen.preventAutoHideAsync().catch(() => {});

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf'),
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (fontError) {
    return (
      <GestureHandlerRootView style={styles.root}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>The app fonts could not load. Please restart the app.</Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        {/* A single provider keeps bookmarks available in every nested screen. */}
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="NewsDrawer"
              screenOptions={{
                headerStyle: { backgroundColor: colors.navy },
                headerTintColor: colors.white,
                headerTitleStyle: { fontFamily: 'Barlow-SemiBold' },
                contentStyle: { backgroundColor: colors.cream },
              }}
            >
              <Stack.Screen
                name="NewsDrawer"
                component={NewsDrawerNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewsDetail"
                component={ListingDetailScreen}
                options={{ title: 'News Detail' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.cream,
  },
  errorText: { color: colors.ink, fontSize: 17, textAlign: 'center' },
});
