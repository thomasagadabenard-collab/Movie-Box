import React, { useContext } from 'react'
import { MovieContext } from '../Components/MovieContext'

const WatchList = () => {
  const {watchlist} = useContext(MovieContext)
  return (
    <div>
      <h2>Watchlist</h2>

      {watchlist.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  )
}

export default WatchList
