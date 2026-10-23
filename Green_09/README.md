# Green_09 — Section 9 App Programming Challenge

Donovan Green · CSCI 343

Vacation Destinations uses React Navigation's native stack with two screens. Home displays a two-column `FlatList` grid of 10 countries. Selecting a country opens an overview containing only that country's two destinations. Each horizontal destination row shows its remote image, name, average daily cost, founding year, and average rating. Tap a row to open a modal with a larger version of the same image, a short description, and a Close button. The native stack's back button returns to Home.

## Run

Install Node.js, open a terminal in this folder, and run:

```sh
npm ci
npm start
```

Use an Expo Go client compatible with **Expo SDK 54**, or an SDK 54 development build. Press `a` in the Expo terminal to open a running Android emulator. The custom splash image is configured through `expo-splash-screen`; a native development/release build displays the app's configured splash, while Expo Go manages its own launch screen. Both bundled Barlow fonts must load before Home appears.

## Organization

- `App.js`: font loading and the native stack navigator.
- `screens/`: Home and DestinationsOverview.
- `components/`: country grid tile, destination row, and information modal.
- `models/`: Country and Destination model classes.
- `data/dummy-data.js`: 10 Country instances and 20 Destination instances. `countryId` links each destination to its country.
- `data/SOURCES.md`: park history sources and remote photo credits/licenses.
- `constants/`: shared colors.
- `assets/`: custom splash PNG and local fonts. Destination photographs are loaded by HTTPS URL and are not stored here.
- `docs/mockup.png`: required screen/modal mockup.

The destinations are national parks. Founding years represent park establishment/designation. Average costs are illustrative USD per person per day, excluding travel to the country; ratings are classroom sample values out of five. These are dummy data, not live prices or actual customer reviews. An internet connection is required for the remote destination images.

## Verification

Verification passed before packaging: JavaScript parsing; SDK dependency/configuration checks; Android/iOS bundle generation; native Android project generation with the custom splash; and 526 assertions covering every country filter, all 20 destination selections, required row fields, modal closing, and font loading. Browser navigation was checked for all 10 countries, with phone layouts at 320×568, 390×844, 412×915, and 844×390. All 20 remote image links returned successful image responses. Native emulator execution and native stack gestures/animations remain unverified; browser previews do not verify those native behaviors.

To check on a device, open every country and confirm that only its two destinations appear. Tap each destination and compare the enlarged image/description, then close the modal and use Back to return Home. Check a narrow phone and landscape layout, font loading, and the custom splash in a native build.

## Submission

Class repository: https://github.com/donxgreen/CSCI-343-Mobile-App-Development

Section 9 Moodle assignment: https://moodle24-26.coastal.edu/mod/assign/view.php?id=1071445

Moodle opens **October 12, 2026 at 1:00 AM** and is due **October 21, 2026 at 11:59 PM**, Eastern time. Upload the `Green_09` folder to the class repository and submit `Green_09.zip` with the repository link to Moodle when submissions open. The ZIP excludes `node_modules`; remove that folder before making a replacement ZIP after installing dependencies. This file does not claim that either upload is complete.

Barlow is distributed under `assets/fonts/Barlow-OFL.txt`. The globe splash image was created for this project. Destination photo authors, licenses, and original source links are listed in `data/SOURCES.md`.
