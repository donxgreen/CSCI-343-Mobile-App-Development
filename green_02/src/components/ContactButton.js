import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '../styles/theme';
import { openLink } from '../utils/openLink';

export default function ContactButton({ icon, label, value, url }) {
  return (
    <Pressable
      accessibilityHint={`Opens the ${label.toLowerCase()} link`}
      accessibilityLabel={`${label}: ${value}`}
      accessibilityRole="link"
      onPress={() => openLink(url, label)}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>

      <View style={styles.textGroup}>
        <Text style={styles.label}>{label}</Text>
        <Text
          adjustsFontSizeToFit
          minimumFontScale={0.8}
          numberOfLines={1}
          style={styles.value}
        >
          {value}
        </Text>
      </View>

      <Text accessibilityElementsHidden style={styles.arrow}>
        ›
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 72,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
  iconCircle: {
    width: 42,
    height: 42,
    marginRight: spacing.md,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: colors.textOnDark,
    fontSize: 16,
    fontWeight: '800',
  },
  textGroup: {
    flex: 1,
  },
  label: {
    marginBottom: 3,
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  arrow: {
    marginLeft: spacing.sm,
    color: colors.primaryDark,
    fontSize: 30,
    fontWeight: '400',
  },
});
