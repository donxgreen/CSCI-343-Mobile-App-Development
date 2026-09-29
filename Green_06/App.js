import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeModal from './components/RecipeModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      title: 'Tomato Pasta',
      text: 'Ingredients:\n200 g pasta\n1 cup tomato sauce\n1 tablespoon olive oil\n\nDirections:\n1. Cook the pasta according to the package directions.\n2. Warm the tomato sauce and olive oil in a pan.\n3. Drain the pasta, stir it into the sauce, and serve.',
    },
    {
      id: '2',
      title: 'Garden Salad',
      text: 'Ingredients:\n2 cups mixed greens\n1 tomato, chopped\n1 cucumber, sliced\n2 tablespoons salad dressing\n\nDirections:\n1. Wash the vegetables.\n2. Place the greens, tomato, and cucumber in a bowl.\n3. Toss with the dressing and serve.',
    },
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const nextRecipeId = useRef(3);

  function showRecipes() {
    setCurrentScreen('recipes');
  }

  function addRecipe(title, text) {
    const trimmedTitle = title.trim();
    const trimmedText = text.trim();

    if (!trimmedTitle || !trimmedText) {
      return;
    }

    const newRecipe = {
      id: String(nextRecipeId.current++),
      title: trimmedTitle,
      text: trimmedText,
    };

    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
    showRecipes();
  }

  function deleteRecipe(id) {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  function viewRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function closeRecipe() {
    setSelectedRecipe(null);
  }

  // The current screen is chosen with state, without a navigation package.
  let screen = <HomeScreen onShowRecipes={showRecipes} />;

  if (currentScreen === 'recipes') {
    screen = (
      <RecipesScreen
        recipes={recipes}
        onViewRecipe={viewRecipe}
        onDeleteRecipe={deleteRecipe}
        onAddRecipe={() => setCurrentScreen('add')}
        onHome={() => setCurrentScreen('home')}
      />
    );
  } else if (currentScreen === 'add') {
    screen = <AddRecipeScreen onSave={addRecipe} onCancel={showRecipes} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>{screen}</SafeAreaView>
      <RecipeModal recipe={selectedRecipe} onClose={closeRecipe} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#FFFDF8',
  },
});
