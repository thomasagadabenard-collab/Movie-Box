import React, { useContext } from 'react'
import { MovieContext } from '../Components/MovieContext'

const Favorites = () => {
  const { favorites } = useContext(MovieContext)
  return (
    <div>
      <h2>Favorites</h2>

      {favorites.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  )
}

export default Favorites
