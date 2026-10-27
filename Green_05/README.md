# Coastal Table

Donovan Green · CSCI 343 · Section 5

## Run

```sh
npm ci
npm start
```

Use an Expo Go client compatible with Expo SDK 54, or an SDK 54 development build.

## Structure

- `App.js` loads the custom Barlow fonts and switches between the two screens using state.
- `screens/` contains the restaurant home page and menu page.
- `components/Title.js` is shared by both pages; `MenuItem.js` displays each menu item.
- `constants/colors.js` supplies the coastal color theme.
- `data/restaurant.js` stores the restaurant information and five menu items.
- `assets/` contains the local photographs, fonts, and font license.
- `docs/mockup.png` shows both screens.

Coastal Table is a fictional restaurant. The contact details and menu prices are sample data. The phone link opens the device dialer, the address opens a map search, and the website opens the reserved example.com domain. The menu's Home button returns to the restaurant page.
