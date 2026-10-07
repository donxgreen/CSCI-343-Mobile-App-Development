import { ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Title';
import ReserveButton from '../components/ReserveButton';
import SelectionField from '../components/SelectionField';
import DateTimeSelection from '../components/DateTimeSelection';
import WheelSelection from '../components/WheelSelection';
import Colors from '../constants/colors';

const guestOptions = Array.from({ length: 15 }, (_value, index) => String(index + 1));
const campsiteOptions = Array.from({ length: 5 }, (_value, index) => String(index + 1));

function formatDate(date) {
  return date.toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit',
  });
}

function ReservationRow({ label, value }) {
  return (
    <View style={styles.reservationRow}>
      <Text style={styles.reservationLabel}>{label}</Text>
      <Text style={styles.reservationValue}>{value}</Text>
    </View>
  );
}

export default function HomeScreen({
  checkIn, checkOut, guests, campsites, activePicker, reservation,
  onOpenPicker, onClosePicker, onConfirmCheckIn, onConfirmCheckOut,
  onConfirmGuests, onConfirmCampsites, onReserve,
}) {
  const { width } = useWindowDimensions();
  const twoColumns = width >= 600;
  const titleSize = Math.max(32, Math.min(48, width / 10));

  return (
    <ImageBackground source={require('../assets/images/camping.jpg')} resizeMode="cover" style={styles.background} imageStyle={styles.backgroundImage}>
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={[styles.scrollContent, { paddingHorizontal: twoColumns ? 28 : 18 }]}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Title fontSize={titleSize}>Pine Ridge Campground</Title>
              </View>
              <View style={[styles.panel, twoColumns && styles.widePanel]}>
                <View style={styles.fields}>
                  <View style={[styles.fieldCell, twoColumns && styles.halfCell]}>
                    <SelectionField label="Check In" value={formatDate(checkIn)} accessibilityLabel="Choose check in date and time" testID="check-in-control" onPress={() => onOpenPicker('checkIn')} />
                  </View>
                  <View style={[styles.fieldCell, twoColumns && styles.halfCell]}>
                    <SelectionField label="Check Out" value={formatDate(checkOut)} accessibilityLabel="Choose check out date and time" testID="check-out-control" onPress={() => onOpenPicker('checkOut')} />
                  </View>
                  <View style={[styles.fieldCell, twoColumns && styles.halfCell]}>
                    <SelectionField label="Number of Guests" value={`${guests} ${guests === 1 ? 'guest' : 'guests'}`} accessibilityLabel="Choose number of guests" testID="guests-control" onPress={() => onOpenPicker('guests')} />
                  </View>
                  <View style={[styles.fieldCell, twoColumns && styles.halfCell]}>
                    <SelectionField label="Number of Campsites" value={`${campsites} ${campsites === 1 ? 'campsite' : 'campsites'}`} accessibilityLabel="Choose number of campsites" testID="campsites-control" onPress={() => onOpenPicker('campsites')} />
                  </View>
                </View>
                <ReserveButton onPress={onReserve} />
                {reservation && (
                  <View testID="reservation-summary" accessibilityLiveRegion="polite" style={styles.reservation}>
                    <Text accessibilityRole="header" style={styles.reservationTitle}>Your Reservation</Text>
                    <ReservationRow label="Check In" value={formatDate(reservation.checkIn)} />
                    <ReservationRow label="Check Out" value={formatDate(reservation.checkOut)} />
                    <ReservationRow label="Guests" value={String(reservation.guests)} />
                    <ReservationRow label="Campsites" value={String(reservation.campsites)} />
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <DateTimeSelection visible={activePicker === 'checkIn'} title="Check In" value={checkIn} onConfirm={onConfirmCheckIn} onClose={onClosePicker} />
      <DateTimeSelection visible={activePicker === 'checkOut'} title="Check Out" value={checkOut} onConfirm={onConfirmCheckOut} onClose={onClosePicker} />
      <WheelSelection visible={activePicker === 'guests'} title="Number of Guests" value={guests} options={guestOptions} onConfirm={onConfirmGuests} onClose={onClosePicker} />
      <WheelSelection visible={activePicker === 'campsites'} title="Number of Campsites" value={campsites} options={campsiteOptions} onConfirm={onConfirmCampsites} onClose={onClosePicker} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  backgroundImage: { width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(11, 42, 31, 0.65)' },
  safeArea: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingTop: 20, paddingBottom: 28 },
  content: { width: '100%', maxWidth: 960, alignSelf: 'center' },
  header: { paddingVertical: 18, paddingHorizontal: 6, marginBottom: 18 },
  panel: { backgroundColor: Colors.cream, borderRadius: 20, padding: 18 },
  widePanel: { padding: 26 },
  fields: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  fieldCell: { width: '100%', marginBottom: 14 },
  halfCell: { width: '48.8%' },
  reservation: { marginTop: 22, borderTopWidth: 1, borderColor: Colors.line, paddingTop: 20 },
  reservationTitle: { fontFamily: 'Barlow-SemiBold', fontSize: 24, color: Colors.primary, marginBottom: 12 },
  reservationRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 6, paddingVertical: 8 },
  reservationLabel: { fontFamily: 'Barlow-SemiBold', fontSize: 17, color: Colors.ink, minWidth: 75 },
  reservationValue: { fontFamily: 'Barlow-Regular', fontSize: 17, color: Colors.muted, flexShrink: 1, textAlign: 'right' },
});
