import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

export default function Title({ children, fontSize = 38 }) {
  return (
    <Text accessibilityRole="header" style={[styles.title, { fontSize, lineHeight: fontSize * 1.25 }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Mountain',
    color: Colors.cream,
    textAlign: 'center',
  },
});
