import React, { useContext } from 'react'
import { MovieContext } from '../Components/MovieContext'

const Favorites = () => {
  const { favorites } = useContext(MovieContext)
  return (
    <>
    <section className='favorite-page'>
      <h2>Favorites</h2>

      <div className='fav'>
        {}
        {favorites.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </section>
    </>
  )
}

export default Favorites
