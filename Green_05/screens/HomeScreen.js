import { Alert, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import Title from '../components/Title';
import Colors from '../constants/colors';

function ContactLink({ label, value, url, testID }) {
  // Open the stored dialer, map, or website URL and handle unsupported links.
  async function openLink() {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Unable to open link', 'Please try again on a device that supports this link.');
    }
  }

  return (
    <View style={styles.contactRow}>
      <Text style={styles.contactLabel} testID={`${testID}-label`}>{label}</Text>
      <Pressable
        onPress={openLink}
        accessibilityRole="link"
        accessibilityLabel={`${label}: ${value}`}
        style={({ pressed }) => [styles.contactLink, pressed && styles.pressed]}
        testID={testID}
      >
        <Text style={styles.contactValue} testID={`${testID}-value`}>{value}</Text>
      </Pressable>
    </View>
  );
}

export default function HomeScreen({ restaurant, onViewMenu }) {
  return (
    <ScrollView contentContainerStyle={styles.content} testID="restaurant-home">
      <Title testID="home-title">{restaurant.name}</Title>
      <Text style={styles.tagline} testID="home-tagline">{restaurant.tagline}</Text>
      <Image
        source={restaurant.image}
        accessibilityLabel="Coastal Table restaurant interior"
        style={styles.restaurantImage}
        resizeMode="cover"
        testID="restaurant-image"
      />
      <Text style={styles.sampleNote} testID="sample-contact-note">Fictional restaurant · sample contact details</Text>
      <View style={styles.contacts}>
        <ContactLink label="Phone" value={restaurant.phone} url={restaurant.phoneUrl} testID="restaurant-phone" />
        <ContactLink label="Address" value={restaurant.address} url={restaurant.addressUrl} testID="restaurant-address" />
        <ContactLink label="Website" value={restaurant.website} url={restaurant.websiteUrl} testID="restaurant-website" />
      </View>
      <Pressable
        onPress={onViewMenu}
        accessibilityRole="button"
        style={({ pressed }) => [styles.menuButton, pressed && styles.pressed]}
        testID="view-menu"
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { width: '100%', maxWidth: 850, alignSelf: 'center', padding: 20, paddingBottom: 28 },
  tagline: { fontFamily: 'Barlow-Regular', fontSize: 18, lineHeight: 25, color: Colors.muted, textAlign: 'center', marginTop: 6, marginBottom: 20 },
  restaurantImage: { width: '100%', aspectRatio: 1.65, borderRadius: 18, backgroundColor: Colors.border },
  sampleNote: { fontFamily: 'Barlow-Regular', fontSize: 14, lineHeight: 20, textAlign: 'center', color: Colors.muted, marginTop: 10 },
  contacts: { marginTop: 16, marginBottom: 18 },
  contactRow: { marginBottom: 8 },
  contactLabel: { fontFamily: 'Barlow-SemiBold', fontSize: 15, lineHeight: 21, color: Colors.muted },
  contactLink: { minHeight: 44, justifyContent: 'center', alignItems: 'flex-start', paddingVertical: 6 },
  contactValue: { fontFamily: 'Barlow-Regular', fontSize: 19, lineHeight: 26, color: Colors.teal, textDecorationLine: 'underline' },
  menuButton: { backgroundColor: Colors.teal, borderRadius: 12, minHeight: 54, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, paddingVertical: 12 },
  buttonText: { fontFamily: 'Barlow-SemiBold', fontSize: 20, lineHeight: 26, color: Colors.white },
  pressed: { opacity: 0.7 },
});
