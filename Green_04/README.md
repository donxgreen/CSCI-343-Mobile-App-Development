# Top 10 Movies

Donovan Green · CSCI 343 · Section 4

## Run

```sh
npm ci
npm start
```

Use an Expo Go client compatible with Expo SDK 54, or an SDK 54 development build.

## Project structure

- `App.js`: the main title and FlatList.
- `components/MovieItem.js`: reusable poster, title, and rating card.
- `data/movies.js`: the ten movie objects.
- `constants/colors.js`: shared colors.
- `assets/images/posters/`: bundled movie posters.
- `docs/mockup.png`: app mockup.

The ranking and ratings are example personal-style ratings out of ten, not live review scores. They can be changed in `data/movies.js`. Posters are bundled so the list can display without an internet connection.
