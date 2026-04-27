import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to = "/">Browse</Link>
        <Link to = "/watchlist">Watchlist</Link>
        <Link to = "/genre">Genre</Link>
        <Link to = "/favorites">Favorites</Link>
      
    </div>
  )
}

export default NavBar
