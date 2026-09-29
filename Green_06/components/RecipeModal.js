import React from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecipeModal({ recipe, onClose }) {
  return (
    <Modal
      visible={recipe !== null}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.backdrop}>
        <View style={styles.card} accessibilityViewIsModal>
          <Text style={styles.title}>{recipe ? recipe.title : ''}</Text>
          <ScrollView style={styles.body}>
            <Text style={styles.recipeText}>{recipe ? recipe.text : ''}</Text>
          </ScrollView>
          <Pressable
            accessibilityRole="button"
            onPress={onClose}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonText}>Return to Recipes</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  card: {
    backgroundColor: '#FFFDF8',
    borderRadius: 12,
    padding: 24,
    maxHeight: '85%',
  },
  title: {
    color: '#24352B',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  body: {
    flexShrink: 1,
    marginBottom: 24,
  },
  recipeText: {
    color: '#24352B',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#285C45',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 12,
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
