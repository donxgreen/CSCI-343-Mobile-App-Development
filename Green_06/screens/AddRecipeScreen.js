import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function AddRecipeScreen({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const canSave = title.trim().length > 0 && text.trim().length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.heading}>Add Recipe</Text>
        <Text style={styles.label}>Recipe Title</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Recipe Title"
          placeholder="Enter recipe title"
          placeholderTextColor="#737D76"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Recipe Text</Text>
        <TextInput
          style={[styles.input, styles.recipeText]}
          accessibilityLabel="Recipe Text"
          placeholder="Enter ingredients and directions"
          placeholderTextColor="#737D76"
          value={text}
          onChangeText={setText}
          multiline
          textAlignVertical="top"
        />
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: !canSave }}
          disabled={!canSave}
          onPress={() => onSave(title, text)}
          style={({ pressed }) => [
            styles.button,
            !canSave && styles.disabledButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={onCancel}
          style={({ pressed }) => [
            styles.button,
            styles.secondaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Cancel</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  heading: {
    color: '#24352B',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 24,
  },
  label: {
    color: '#24352B',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#24352B',
    borderColor: '#BAC7BE',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 14,
    marginBottom: 22,
  },
  recipeText: {
    minHeight: 220,
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
  disabledButton: {
    opacity: 0.45,
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
