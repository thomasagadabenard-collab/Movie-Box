import React, { useContext } from 'react'
import { MovieContext } from '../Components/MovieContext'

const WatchList = () => {
  const { watchlist, removeWatchlist } =
    useContext(MovieContext)

  return (
    <div className='watchlist-wrapper'>
      <h1>Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies in watchlist</p>
      ) : (
        <div className='watchlist-grid'>
          {watchlist.map((movie) => (
            <div
              className='watchlist-card'
              key={movie.id}
            >
              <img src={movie.image} alt={movie.title} />

              <div className='watchlist-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>

                <button
                  onClick={() =>
                    removeWatchlist(movie.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WatchList