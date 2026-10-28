# Newsroom

Donovan Green · CSCI 343 · Section 11

## Run

```sh
npm ci
npm start
```

Use an Expo Go client compatible with Expo SDK 54, or an SDK 54 development build. The app waits for the bundled Barlow and Ionicons fonts before displaying the news screens. Remote article photographs require an internet connection.

## Project structure

- `App.js`: font loading, top-level native stack, and shared bookmark provider.
- `navigation/`: drawer and bottom tab navigators.
- `screens/`: US News, World News, Tech News, ListingDetailScreen (News Detail), and BookmarksScreen (Bookmarked News).
- `components/`: filtered List, ListItem, header menu, and BookmarkButton.
- `models/news.js` and `data/dummy-data.js`: News model and nine sample articles.
- `store/context/bookmarks-context.js`: Context, provider, and add/remove bookmark actions.
- `assets/fonts/`: local fonts and their license.
- `docs/mockup.png`: labeled screen and component schematic, navigation, and shared state flow.

The navigation hierarchy is native stack → drawer → bottom tabs. News Detail opens on the native stack; Bookmarked News opens from the drawer. Each category uses the same List component to filter its articles.

## Bookmarks

Open an article and tap its header bookmark button. A filled icon means the article is saved; an outline means it is not saved. The drawer's Bookmarked News screen lists saved articles from all three categories. Opening a saved article and tapping its filled icon removes it from the shared list. A message explains how to save an article when the list is empty.

Context keeps this collection consistent across screens for the current app session. Restarting the app clears it. Stories, authors, and agencies are fictional classroom sample data; photo sources are documented in `data/SOURCES.md`.
