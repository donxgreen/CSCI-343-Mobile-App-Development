import { StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';

// A shared title keeps the restaurant name and menu heading visually consistent.
export default function Title({ children, testID }) {
  return (
    <Text accessibilityRole="header" style={styles.title} testID={testID}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 36,
    lineHeight: 43,
    color: Colors.teal,
    textAlign: 'center',
  },
});
