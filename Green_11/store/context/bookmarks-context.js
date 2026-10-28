import { createContext, useCallback, useMemo, useState } from 'react';

// IDs identify the original articles without duplicating their model data.
export const BookmarksContext = createContext({
  ids: [],
  addBookmark: () => {},
  removeBookmark: () => {},
});

export default function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // Functional updates preserve other bookmarks when several changes occur.
  const addBookmark = useCallback((newsId) => {
    setBookmarkedIds((currentIds) => (
      currentIds.includes(newsId) ? currentIds : [...currentIds, newsId]
    ));
  }, []);

  const removeBookmark = useCallback((newsId) => {
    setBookmarkedIds((currentIds) => currentIds.filter((id) => id !== newsId));
  }, []);

  // Every navigator receives the same session-wide collection and actions.
  const contextValue = useMemo(() => ({
    ids: bookmarkedIds,
    addBookmark,
    removeBookmark,
  }), [bookmarkedIds, addBookmark, removeBookmark]);

  return (
    <BookmarksContext.Provider value={contextValue}>
      {children}
    </BookmarksContext.Provider>
  );
}
