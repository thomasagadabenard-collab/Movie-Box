import { createContext, useState, useEffect  } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorite")) || []
  });
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || []
  });

  const addFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const addWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const removeWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])


  return (
    <MovieContext.Provider
      value={{
        favorites,
        watchlist,
        addFavorite,
        addWatchlist,
        removeFavorite,
        removeWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};