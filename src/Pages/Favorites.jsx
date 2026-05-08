import React, { useContext } from 'react'
import { MovieContext } from '../Components/MovieContext'

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(MovieContext)

  return (
    <div className='favorite-wrapper'>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className='favorite-grid'>
          {favorites.map((movie) => (
            <div className='favorite-card' key={movie.id}>
              <img src={movie.image} alt={movie.title} />

              <div className='favorite-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>

                <button
                  onClick={() => removeFavorite(movie.id)}
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

export default Favorites