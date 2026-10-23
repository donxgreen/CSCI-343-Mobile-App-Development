import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/colors';

export default function DestinationModal({ destination, onClose }) {
  const { height } = useWindowDimensions();

  return (
    <Modal
      visible={destination !== null}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      supportedOrientations={['portrait', 'landscape']}
    >
      {destination && (
        <SafeAreaView style={styles.backdrop}>
          <View testID="destination-modal" style={styles.panel}>
            <Text accessibilityRole="header" style={styles.title}>{destination.name}</Text>
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
              <Image
                source={{ uri: destination.imageUrl }}
                accessibilityLabel={destination.name}
                resizeMode="cover"
                style={[styles.image, { height: Math.min(260, Math.max(140, height * 0.32)) }]}
              />
              <Text style={styles.description}>{destination.description}</Text>
            </ScrollView>
            <View style={styles.footer}>
              <Pressable
                testID="modal-close"
                accessibilityRole="button"
                onPress={onClose}
                style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}
              >
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(8, 24, 33, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  panel: {
    width: '100%',
    maxWidth: 640,
    maxHeight: '94%',
    backgroundColor: Colors.cream,
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Barlow-SemiBold',
    color: Colors.navy,
    fontSize: 23,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  scrollArea: { flexShrink: 1 },
  scrollContent: { paddingBottom: 4 },
  image: { width: '100%', backgroundColor: Colors.border },
  description: {
    fontFamily: 'Barlow-Regular',
    color: Colors.navy,
    fontSize: 17,
    lineHeight: 25,
    padding: 20,
  },
  footer: { padding: 16 },
  closeButton: {
    backgroundColor: Colors.accent,
    borderRadius: 10,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: { fontFamily: 'Barlow-SemiBold', fontSize: 18, color: Colors.navy },
  pressed: { opacity: 0.75 },
});
