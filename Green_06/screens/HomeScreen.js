import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ onShowRecipes }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <Image
        source={require('../assets/recipes.jpg')}
        style={styles.image}
        resizeMode="cover"
        accessible
        accessibilityLabel="Freshly prepared recipe ingredients and food"
      />
      <Pressable
        accessibilityRole="button"
        onPress={onShowRecipes}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Recipes</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#24352B',
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 28,
  },
  button: {
    backgroundColor: '#285C45',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
