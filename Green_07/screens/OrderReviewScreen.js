import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/colors';

function PriceRow({ label, amount, total = false }) {
  return (
    <View style={[styles.row, total && styles.totalRow]}>
      <Text style={[styles.label, total && styles.totalText]}>{label}</Text>
      <Text style={[styles.amount, total && styles.totalText]}>${amount.toFixed(2)}</Text>
    </View>
  );
}

export default function OrderReviewScreen({
  repairTime, services, newsletter, rentalMembership,
  subtotal, salesTax, total, onReturnHome,
}) {
  const selectedServices = services.filter((service) => service.value);

  return (
    <LinearGradient colors={[Colors.cream, '#B6D1C3', Colors.primary]} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <Title>Order Review</Title>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.card}>
            <Text accessibilityRole="header" style={styles.heading}>Your selections</Text>
            <Text style={styles.sectionLabel}>SERVICE TIME</Text>
            <PriceRow label={repairTime.value} amount={repairTime.price} />
            <Text style={styles.sectionLabel}>SERVICES</Text>
            {selectedServices.length === 0 && <Text style={styles.empty}>No services selected.</Text>}
            {selectedServices.map((service) => (
              <PriceRow key={service.id} label={service.name} amount={service.price} />
            ))}
            {(newsletter || rentalMembership) && <Text style={styles.sectionLabel}>SIGNUPS</Text>}
            {newsletter && <PriceRow label="Newsletter signup" amount={0} />}
            {rentalMembership && <PriceRow label="Rental membership signup" amount={100} />}
          </View>
          <View style={styles.card}>
            <PriceRow label="Subtotal" amount={subtotal} />
            <PriceRow label="Sales tax (6%)" amount={salesTax} />
            <PriceRow label="Final total" amount={total} total />
          </View>
          <NavButton onPress={onReturnHome}>Return Home</NavButton>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  safeArea: { flex: 1 },
  content: { padding: 18, gap: 16, width: '100%', maxWidth: 580, alignSelf: 'center' },
  card: { backgroundColor: Colors.white, padding: 20, borderRadius: 14 },
  heading: { fontFamily: 'Barlow-SemiBold', fontSize: 22, color: Colors.primary, marginBottom: 8 },
  sectionLabel: { fontFamily: 'Barlow-SemiBold', fontSize: 13, letterSpacing: 1.3, color: Colors.muted, marginTop: 16, marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingVertical: 10 },
  label: { flex: 1, fontFamily: 'Barlow-Regular', fontSize: 18, color: Colors.text },
  amount: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.text },
  totalRow: { marginTop: 8, paddingTop: 18, borderTopWidth: 1, borderTopColor: Colors.border },
  totalText: { fontFamily: 'Barlow-SemiBold', fontSize: 22, color: Colors.primary },
  empty: { fontFamily: 'Barlow-Regular', fontSize: 18, color: Colors.muted, paddingVertical: 10 },
});
