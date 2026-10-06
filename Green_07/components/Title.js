import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 22, backgroundColor: Colors.primary },
  title: { fontFamily: 'Barlow-SemiBold', fontSize: 29, color: Colors.cream, textAlign: 'center' },
});
