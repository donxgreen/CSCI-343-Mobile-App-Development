# Green_08 — Section 8 App Programming Challenge

Donovan Green · CSCI 343

Pine Ridge Campground is a one-screen React Native app. Tap the check-in or check-out text to select a date and time. Tap the guest or campsite text to open its wheel selector. Guests range from 1–15 and campsites from 1–5. Confirm a picker to keep its selection; Cancel leaves the previous value unchanged. Reserve Now displays the four confirmed selections immediately below the button. Editing the form afterward does not change that summary until Reserve Now is pressed again.

On Android, confirm the date first, then confirm the time. Neither value is saved until the time is confirmed. The app uses the community date/time picker and `react-native-wheely` shown in the Section 8 lessons. It waits for the bundled fonts to load before showing Home and uses the class campground images for its splash screen and home background.

## Run

Install Node.js, then open a terminal in this folder:

```sh
npm ci
npm start
```

Use an Expo Go client compatible with **Expo SDK 54**, or an SDK 54 development build. With an Android emulator running, press `a` in the Expo terminal. The splash screen plugin takes full effect in a native build; Expo Go controls its own launch screen.

## Folder structure

- `App.js`: committed selections, active picker, reservation snapshot, and font loading.
- `screens/HomeScreen.js`: responsive home form and reservation summary.
- `components/`: reusable title, reserve button, selection fields, and selection modals. Native and browser date/time implementations are separate; Android and iOS use the community component.
- `constants/colors.js`: shared colors.
- `assets/`: local fonts, background image, and splash image.
- `docs/mockup.png`: mockup of the home screen and selection panels, including phone and tablet layouts.

The home layout uses `useWindowDimensions`, switches to two columns at wider sizes, and scrolls when vertical space is limited. Picker panels adapt to short landscape windows.

## Verification

Verification passed: JavaScript parsing; SDK dependency/configuration checks; Android/iOS bundle generation; Android native project generation with the custom splash image; and 363 state/picker assertions covering all 75 guest/campsite combinations. Browser layout checks passed at 412×915, 915×412, 800×1280, and 1280×800, including rotation with a picker open. The browser date/time panel is a preview fallback; it does not test the native Android dialog. Actual Pixel 7 API 36 and Pixel Tablet API 36 emulator execution still requires Android Studio/SDK on a machine with those devices configured.

For the required native check, run on both assigned emulators in portrait and landscape. Open each picker, change and confirm a value, try Cancel, and reserve. Verify that all four values appear below the button, both wheel endpoints are selectable, and rotating with a picker or summary open preserves the values and keeps the controls reachable.

## Submission

Class repository: https://github.com/donxgreen/CSCI-343-Mobile-App-Development

Upload this `Green_08` folder to the class repository. Submit `Green_08.zip` to the Section 8 Moodle assignment and include the repository link. The ZIP excludes `node_modules`; if you install dependencies locally, remove that folder before creating a replacement ZIP. This README does not claim that either upload has been completed.

Assets: Mountain font and campground photographs were provided in the course's CampgroundFonts and CampgroundImages archives. Barlow is distributed under the included `assets/fonts/Barlow-OFL.txt` license.
