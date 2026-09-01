import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ContactButton from '../components/ContactButton';
import ProfileImage from '../components/ProfileImage';
import { profile } from '../data/profile';
import { colors, radius, spacing } from '../styles/theme';

const contactItems = [
  {
    id: 'email',
    icon: '@',
    label: 'Email',
    value: profile.email,
    url: `mailto:${profile.email}`,
  },
  {
    id: 'phone',
    icon: 'TEL',
    label: 'Phone',
    value: profile.phoneDisplay,
    url: profile.phoneUrl,
  },
  {
    id: 'github',
    icon: 'GH',
    label: 'GitHub',
    value: profile.githubDisplay,
    url: profile.githubUrl,
  },
];

export default function BusinessCardScreen() {
  return (
    <View style={styles.screen}>
      <View pointerEvents="none" style={styles.decorativeCircleLarge} />
      <View pointerEvents="none" style={styles.decorativeCircleSmall} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>BUSINESS CARD</Text>

            <ProfileImage name={profile.name} uri={profile.photoUrl} />

            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{profile.role}</Text>
            <Text style={styles.organization}>{profile.organization}</Text>
          </View>

          <View style={styles.contactSection}>
            <Text style={styles.sectionTitle}>Contact Me</Text>
            <Text style={styles.sectionDescription}>
              Tap a contact item to open it on your device.
            </Text>

            {contactItems.map((item) => (
              <ContactButton key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  card: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 22,
    elevation: 12,
  },
  hero: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    backgroundColor: colors.hero,
    alignItems: 'center',
  },
  eyebrow: {
    marginBottom: spacing.md,
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2.2,
  },
  name: {
    marginTop: spacing.md,
    color: colors.textOnDark,
    fontSize: 31,
    fontWeight: '800',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  role: {
    marginTop: spacing.xs,
    color: colors.accent,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  organization: {
    marginTop: spacing.xs,
    color: colors.textOnDarkMuted,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  contactSection: {
    padding: spacing.lg,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 23,
    fontWeight: '800',
  },
  sectionDescription: {
    marginTop: 4,
    marginBottom: spacing.xs,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  decorativeCircleLarge: {
    position: 'absolute',
    top: -115,
    right: -105,
    width: 280,
    height: 280,
    borderRadius: radius.round,
    backgroundColor: colors.backgroundAccent,
    opacity: 0.75,
  },
  decorativeCircleSmall: {
    position: 'absolute',
    bottom: -55,
    left: -45,
    width: 150,
    height: 150,
    borderRadius: radius.round,
    backgroundColor: colors.primary,
    opacity: 0.22,
  },
});
