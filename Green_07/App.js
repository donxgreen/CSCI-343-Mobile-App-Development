import { useEffect, useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';
import Colors from './constants/colors';

// Keep the custom native splash visible until the bundled fonts are ready.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [repairTimeId, setRepairTimeId] = useState('0');
  const [services, setServices] = useState([
    { id: 0, name: 'Basic Tune-Up', value: false, price: 50 },
    { id: 1, name: 'Comprehensive Tune-Up', value: false, price: 75 },
    { id: 2, name: 'Flat Tire Repair', value: false, price: 20 },
    { id: 3, name: 'Brake Servicing', value: false, price: 50 },
    { id: 4, name: 'Gear Servicing', value: false, price: 40 },
    { id: 5, name: 'Chain Servicing', value: false, price: 15 },
    { id: 6, name: 'Frame Repair', value: false, price: 35 },
    { id: 7, name: 'Safety Check', value: false, price: 25 },
    { id: 8, name: 'Accessory Install', value: false, price: 10 },
  ]);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [total, setTotal] = useState(0);

  const repairTimeRadioButtons = useMemo(() => [
    { id: '0', label: 'Standard ($0)', value: 'Standard', price: 0, color: Colors.primary, borderColor: Colors.primary },
    { id: '1', label: 'Expedited ($50)', value: 'Expedited', price: 50, color: Colors.primary, borderColor: Colors.primary },
    { id: '2', label: 'Next Day ($100)', value: 'Next Day', price: 100, color: Colors.primary, borderColor: Colors.primary },
  ], []);

  const [fontsLoaded, fontError] = useFonts({
    'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
    'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  function toggleServiceHandler(id) {
    setServices((previousServices) => previousServices.map((service) => (
      service.id === id ? { ...service, value: !service.value } : service
    )));
  }

  function orderReviewHandler() {
    const repairTime = repairTimeRadioButtons.find((option) => option.id === repairTimeId);
    let price = repairTime.price;
    services.forEach((service) => {
      if (service.value) price += service.price;
    });
    if (rentalMembership) price += 100;

    const tax = Math.round(price * 0.06 * 100) / 100;
    setCurrentPrice(price);
    setSalesTax(tax);
    setTotal(Math.round((price + tax) * 100) / 100);
    setCurrentScreen('review');
  }

  function homeScreenHandler() {
    setRepairTimeId('0');
    setServices((previousServices) => previousServices.map((service) => ({ ...service, value: false })));
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentPrice(0);
    setSalesTax(0);
    setTotal(0);
    setCurrentScreen('home');
  }

  if (!fontsLoaded && !fontError) return null;
  if (fontError) {
    return <View style={styles.error}><Text>Unable to load fonts. Please restart the app.</Text></View>;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      {currentScreen === 'home' ? (
        <HomeScreen
          repairTimeRadioButtons={repairTimeRadioButtons}
          repairTimeId={repairTimeId}
          onSelectRepairTime={setRepairTimeId}
          services={services}
          onToggleService={toggleServiceHandler}
          newsletter={newsletter}
          onChangeNewsletter={setNewsletter}
          rentalMembership={rentalMembership}
          onChangeRentalMembership={setRentalMembership}
          onSubmitOrder={orderReviewHandler}
        />
      ) : (
        <OrderReviewScreen
          repairTime={repairTimeRadioButtons.find((option) => option.id === repairTimeId)}
          services={services}
          newsletter={newsletter}
          rentalMembership={rentalMembership}
          subtotal={currentPrice}
          salesTax={salesTax}
          total={total}
          onReturnHome={homeScreenHandler}
        />
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  error: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: Colors.cream },
});
