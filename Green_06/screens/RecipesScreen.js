import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import RecipeItem from '../components/RecipeItem';

export default function RecipesScreen({
  recipes,
  onViewRecipe,
  onDeleteRecipe,
  onAddRecipe,
  onHome,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList
        style={styles.list}
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeItem
            recipe={item}
            onView={onViewRecipe}
            onDelete={onDeleteRecipe}
          />
        )}
      />
      <Pressable
        accessibilityRole="button"
        onPress={onAddRecipe}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Add Recipe</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        onPress={onHome}
        style={({ pressed }) => [
          styles.button,
          styles.secondaryButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.secondaryButtonText}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    color: '#24352B',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 24,
  },
  list: {
    flex: 1,
    marginBottom: 16,
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
  secondaryButton: {
    backgroundColor: '#FFFDF8',
    borderWidth: 1,
    borderColor: '#285C45',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#285C45',
    fontSize: 17,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
