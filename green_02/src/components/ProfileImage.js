import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, radius } from '../styles/theme';

export default function ProfileImage({ name, uri }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.frame}>
      {imageFailed ? (
        <View
          accessibilityLabel={`${name} profile image placeholder`}
          style={styles.placeholder}
        >
          <Text style={styles.initials}>{initials}</Text>
        </View>
      ) : (
        <Image
          accessibilityLabel={`${name} profile image`}
          onError={() => setImageFailed(true)}
          resizeMode="cover"
          source={{ uri }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: 142,
    height: 142,
    borderRadius: radius.round,
    padding: 5,
    backgroundColor: colors.card,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: radius.round,
    backgroundColor: colors.surface,
  },
  placeholder: {
    flex: 1,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: colors.textOnDark,
    fontSize: 44,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
