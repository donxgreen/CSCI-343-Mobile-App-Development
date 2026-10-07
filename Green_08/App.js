import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';

SplashScreen.preventAutoHideAsync().catch(() => {});

function initialCheckIn() {
  const date = new Date();
  date.setHours(15, 0, 0, 0);
  return date;
}

function initialCheckOut() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(11, 0, 0, 0);
  return date;
}

export default function App() {
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(1);
  const [campsites, setCampsites] = useState(1);
  const [activePicker, setActivePicker] = useState(null);
  const [reservation, setReservation] = useState(null);

  const [fontsLoaded, fontError] = useFonts({
    Mountain: require('./assets/fonts/Mountain.ttf'),
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) SplashScreen.hideAsync().catch(() => {});
  }, [fontsLoaded, fontError]);

  function confirmCheckIn(value) {
    setCheckIn(value);
    setActivePicker(null);
  }

  function confirmCheckOut(value) {
    setCheckOut(value);
    setActivePicker(null);
  }

  function confirmGuests(value) {
    setGuests(value);
    setActivePicker(null);
  }

  function confirmCampsites(value) {
    setCampsites(value);
    setActivePicker(null);
  }

  function reserveNow() {
    setReservation({
      checkIn: new Date(checkIn.getTime()),
      checkOut: new Date(checkOut.getTime()),
      guests,
      campsites,
    });
  }

  if (!fontsLoaded && !fontError) return null;
  if (fontError) {
    return <View style={styles.error}><Text>Unable to load fonts. Please restart the app.</Text></View>;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <HomeScreen
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        campsites={campsites}
        activePicker={activePicker}
        reservation={reservation}
        onOpenPicker={setActivePicker}
        onClosePicker={() => setActivePicker(null)}
        onConfirmCheckIn={confirmCheckIn}
        onConfirmCheckOut={confirmCheckOut}
        onConfirmGuests={confirmGuests}
        onConfirmCampsites={confirmCampsites}
        onReserve={reserveNow}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  error: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.cream, padding: 24 },
});
