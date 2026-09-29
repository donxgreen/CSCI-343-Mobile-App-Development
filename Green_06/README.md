# Green_06 — Recipes

Donovan Green  
CSCI 343 — Section 6: MultiScreen Logic

## Run

This project uses Expo SDK 54, React 19.1, and React Native 0.81.5,
matching the Expo SDK used by the existing class project in the repository.
Use Node.js 22 LTS or newer.

From the extracted `Green_06` folder:

```sh
npm ci
npm start
```

Open the app using an Expo Go version compatible with SDK 54 or a compatible
development build. An Android SDK 54 Expo Go download is available through
[Expo Go](https://expo.dev/go?sdkVersion=54&platform=android&device=true).
A newer Expo Go client may not support this SDK. An Android emulator can be
opened with `npm run android`; `npm run ios` requires macOS and an iOS simulator.

## Required app behavior

- **Home:** Recipes title, bundled stock image, and Recipes button.
- **Recipes:** FlatList of RecipeItems, with title, View, and Delete in each row;
  Add Recipe and Home buttons.
- **Recipe modal:** selected recipe title and text, plus Return to Recipes.
- **Add Recipe:** title and recipe text inputs, Save, and Cancel. Save adds the
  recipe and returns to Recipes. Cancel returns without saving. Both fields
  must contain text before Save is enabled.

`App.js` owns the recipe list, current screen, and selected recipe state.
It passes data and functions through props. There is no navigation library.
Two sample recipes are included. Changes last for the current app session;
restarting the app restores the sample list.

## Files

```text
Green_06/
  App.js
  index.js
  app.json
  package.json
  package-lock.json
  .gitignore
  README.md
  assets/
    recipes.jpg
  components/
    RecipeItem.js
    RecipeModal.js
  screens/
    HomeScreen.js
    RecipesScreen.js
    AddRecipeScreen.js
  docs/
    mockup.png
```

The PNG in `docs` shows all three screens and the modal.

## Verification

- JavaScript bundled successfully for Android and iOS with Expo.
- Browser rendering of the same components passed checks for Home, View,
  modal return, Save, Cancel, input reset, Delete, and state retention while
  switching screens.
- Checked an empty recipe list and a long recipe at a small phone viewport.
- No physical device or native emulator was available for runtime testing.
- `node_modules` is excluded from the delivered project and ZIP.

## Submission

1. Class repository:
   [CSCI-343-Mobile-App-Development](https://github.com/donxgreen/CSCI-343-Mobile-App-Development).
   The Section 6 project belongs in the `Green_06` folder.
2. Submit `Green_06.zip` to the Section 6 Moodle assignment, and include that
   repository URL in the submission note.
3. If you install dependencies to test the app and make a new ZIP, remove
   `node_modules` before zipping the project folder again.

**Moodle status:** The project has not been submitted to Moodle.

## Stock photo credit

`assets/recipes.jpg`: [Bowl of vegetable salads](https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0)
by Anna Pelzer, used under the [Unsplash License](https://unsplash.com/license).
The image is bundled locally so it does not require an internet connection
while the app is running.
