# Green_07 — Bicycle Repair Shop

Donovan Green · CSCI 343 · Section 7 App Programming Challenge

## Run

Use Node.js 20.19 or newer and an Expo client compatible with Expo SDK 54.
From this folder:

```sh
npm ci
npm start
```

Open the project in a compatible Expo Go client or a native development build.
The custom splash image is configured in `app.json`. Expo Go does not reproduce
the full native splash; check it in a release build. See the
[Expo splash-screen documentation](https://docs.expo.dev/versions/v54.0.0/sdk/splash-screen/).

## Structure and behavior

- `App.js`: all application state, font loading, screen changes, order calculation, and reset.
- `screens/HomeScreen.js`: service-time radio buttons, nine service checkboxes, two signup switches, and Submit Order.
- `screens/OrderReviewScreen.js`: selected items, subtotal, 6% sales tax, final total, and Return Home.
- `components/Title.js` and `components/NavButton.js`: shared components imported by both screens.
- `constants/colors.js`: shared colors.
- `assets/fonts/`: bundled Barlow Regular and SemiBold fonts and their license.
- `assets/images/`: original bicycle background and custom splash PNGs.
- `docs/mockup.png`: startup, Home, and Order Review mockup.

The implementation follows the class's `BicycleRepairShopStates.zip` data shape
and simple screen-state approach. It uses `react-native-radio-buttons-group`,
`react-native-bouncy-checkbox`, native `Switch`, `react-native-safe-area-context`,
`expo-font`, `expo-splash-screen`, and `expo-linear-gradient` as demonstrated in
the Section 7 videos. Radio IDs are strings so the default Standard option works
with the radio-button component. No navigation package is needed.

All options are controlled by state in `App.js`. Submit Order calculates the
subtotal from service time, selected services, and the optional $100 membership.
Newsletter signup costs $0. Sales tax is 6%, rounded to cents. Return Home resets
Standard service time, clears all checkboxes and switches, and resets all amounts.
The app waits for both custom fonts before showing Home.

## Verification

- Android, iOS, and web JavaScript bundles exported successfully.
- Executed the actual `App.js` handlers with a lightweight hook harness for all
  6,144 combinations of time, services, and signups; pricing, tax, passed choices,
  and reset checks passed. Font loading and font-error behavior also passed.
- Browser interaction checked radio buttons, checkboxes, switches, submission,
  order breakdown, and reset at 390 px and 320 px phone widths.
- Example: Expedited + Flat Tire Repair + Chain Servicing + both signups gives
  $185.00 subtotal, $11.10 tax, and $196.10 final total.
- All services + Next Day + rental membership gives $520.00 subtotal,
  $31.20 tax, and $551.20 final total.

A physical Android/iOS device and the native release splash were not tested.
The checkbox library produces an expected native-animation fallback warning
in the browser preview; the controls work. The delivered folder/ZIP contains
no `node_modules`, generated native projects, or temporary verification tools.

## Submission

Class repository: https://github.com/donxgreen/CSCI-343-Mobile-App-Development

Project folder: https://github.com/donxgreen/CSCI-343-Mobile-App-Development/tree/main/Green_07

Submit `Green_07.zip` to the Section 7 Moodle assignment and include the class
repository link above in the submission. Moodle submission is a separate step;
this project does not claim it has been submitted there.

## Sources

Course videos: [Part 1](https://www.youtube.com/watch?v=BreotyCqILs),
[Part 2](https://www.youtube.com/watch?v=IKYckHzpQ7w),
[Part 3](https://www.youtube.com/watch?v=moOmedp7fgg).

Barlow by Jeremy Tribby is distributed under the SIL Open Font License 1.1.
Font source: https://github.com/google/fonts/tree/main/ofl/barlow
The license is included in `assets/fonts/OFL.txt`. The bicycle artwork was
created for this project.
