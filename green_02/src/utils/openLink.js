import { Alert, Linking } from 'react-native';

export async function openLink(url, label) {
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.warn(`Unable to open ${label} link:`, error);
    Alert.alert(
      'Unable to open link',
      `Your device could not open the ${label.toLowerCase()} link.`
    );
  }
}
