import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function RecipeItem({ recipe, onView, onDelete }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`View ${recipe.title}`}
        onPress={() => onView(recipe)}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>View</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Delete ${recipe.title}`}
        onPress={() => onDelete(recipe.id)}
        style={({ pressed }) => [
          styles.button,
          styles.deleteButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DEE5DE',
    paddingVertical: 16,
  },
  title: {
    flex: 1,
    color: '#24352B',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 8,
  },
  button: {
    backgroundColor: '#285C45',
    borderRadius: 6,
    minHeight: 44,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#9E3C32',
    marginLeft: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
