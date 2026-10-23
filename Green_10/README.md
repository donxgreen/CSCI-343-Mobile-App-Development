# Newsroom

Donovan Green · CSCI 343 · Section 10

## Run

```sh
npm ci
npm start
```

Use an Expo Go client compatible with Expo SDK 54, or an SDK 54 development build. The app waits for the bundled Barlow and Ionicons fonts before displaying the news screens. Remote article photographs require an internet connection.

## Project structure

- `App.js`: top-level native stack and font loading.
- `navigation/`: drawer and bottom tab navigators.
- `screens/`: US News, World News, Tech News, News Detail, and Bookmarked News.
- `components/`: filtered List, ListItem, header menu, and BookmarkButton.
- `models/news.js` and `data/dummy-data.js`: News model and nine sample articles.
- `assets/fonts/`: local fonts and their license.
- `docs/mockup.png`: screen mockup.

The navigation hierarchy is native stack → drawer → bottom tabs. News Detail opens on the native stack; Bookmarked News opens from the drawer. Each category uses the same List component to filter its articles.

Stories, authors, and agencies are fictional classroom sample data. The bookmark button changes its icon locally. Bookmarked News is intentionally empty for this section; saving articles is introduced in the next section.
