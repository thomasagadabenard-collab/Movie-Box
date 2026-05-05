import React from 'react'

const Addpopopup = ({ movie, onAddFavorite, onAddWatchlist }) => {
  return (
    <ul className='pop-up-btns'>
      <li onClick={(e) => {e.stopPropagation(); onAddFavorite(movie)}}>
        Add to favorites
      </li>
      <li onClick={(e) => {e.stopPropagation(); onAddWatchlist(movie)}}>
        Add to watchlist
      </li> 
    </ul>
  )
}

export default Addpopopup