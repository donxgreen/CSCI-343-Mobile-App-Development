import { ImageBackground, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioGroup from 'react-native-radio-buttons-group';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Title from '../components/Title';
import NavButton from '../components/NavButton';
import Colors from '../constants/colors';

export default function HomeScreen({
  repairTimeRadioButtons, repairTimeId, onSelectRepairTime,
  services, onToggleService, newsletter, onChangeNewsletter,
  rentalMembership, onChangeRentalMembership, onSubmitOrder,
}) {
  return (
    <ImageBackground source={require('../assets/images/home-background.png')} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <Title>Bicycle Repair Shop</Title>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.card}>
            <Text accessibilityRole="header" style={styles.heading}>Service time</Text>
            <RadioGroup
              radioButtons={repairTimeRadioButtons}
              selectedId={repairTimeId}
              onPress={onSelectRepairTime}
              containerStyle={styles.radioGroup}
              labelStyle={styles.optionText}
            />
          </View>
          <View style={styles.card}>
            <Text accessibilityRole="header" style={styles.heading}>Service options</Text>
            <Text style={styles.hint}>Select one or more services.</Text>
            {services.map((service) => (
              <BouncyCheckbox
                key={service.id}
                size={24}
                isChecked={service.value}
                useBuiltInState={false}
                onPress={() => onToggleService(service.id)}
                text={`${service.name} ($${service.price})`}
                textStyle={styles.checkboxText}
                style={styles.checkbox}
                fillColor={Colors.primary}
                unFillColor={Colors.white}
                iconStyle={styles.checkboxIcon}
                innerIconStyle={styles.checkboxIcon}
                accessibilityLabel={`${service.name} ($${service.price})`}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: service.value }}
              />
            ))}
          </View>
          <View style={styles.card}>
            <Text accessibilityRole="header" style={styles.heading}>Signups</Text>
            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>Newsletter signup ($0)</Text>
              <Switch
                accessibilityLabel="Newsletter signup ($0)"
                value={newsletter}
                onValueChange={onChangeNewsletter}
                trackColor={{ false: Colors.border, true: Colors.primary }}
                thumbColor={Colors.white}
              />
            </View>
            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>Rental membership signup ($100)</Text>
              <Switch
                accessibilityLabel="Rental membership signup ($100)"
                value={rentalMembership}
                onValueChange={onChangeRentalMembership}
                trackColor={{ false: Colors.border, true: Colors.primary }}
                thumbColor={Colors.white}
              />
            </View>
          </View>
          <NavButton onPress={onSubmitOrder}>Submit Order</NavButton>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: Colors.cream },
  safeArea: { flex: 1 },
  content: { padding: 18, gap: 16, width: '100%', maxWidth: 580, alignSelf: 'center' },
  card: { backgroundColor: 'rgba(255,255,255,0.96)', borderRadius: 14, padding: 18, borderWidth: 1, borderColor: Colors.border },
  heading: { fontFamily: 'Barlow-SemiBold', fontSize: 22, color: Colors.primary, marginBottom: 10 },
  hint: { fontFamily: 'Barlow-Regular', fontSize: 16, color: Colors.muted, marginBottom: 8 },
  radioGroup: { alignItems: 'flex-start', gap: 6 },
  optionText: { fontFamily: 'Barlow-Regular', fontSize: 18, color: Colors.text, flexShrink: 1 },
  checkbox: { minHeight: 48, paddingVertical: 10 },
  checkboxText: { fontFamily: 'Barlow-Regular', fontSize: 18, color: Colors.text, textDecorationLine: 'none' },
  checkboxIcon: { borderRadius: 4, borderColor: Colors.primary },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 58, gap: 12 },
  switchLabel: { flex: 1, fontFamily: 'Barlow-Regular', fontSize: 18, color: Colors.text },
});
