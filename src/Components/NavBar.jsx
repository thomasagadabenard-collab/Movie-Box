import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import x from '../assets/x.png'

const NavBar = () => {
  const [dark, setDark] = useState(false)
  const [ham, setHam] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
  }

  const hamburgerFn = () => {
    setHam(!ham)
  }

  useEffect(() => {
    document.body.className = dark ? "dark" : "light"
  }, [dark])

  return (
    <>
        <div className='navbar'>
          <div className='logo-links'>
            <div>
              <Link to= "/" className='logo'>Movie-Box</Link>
            </div>
            <div className='links'>
              <Link to = "/" className='link'>Browse</Link>
              <Link to = "/watchlist" className='link'>Watchlist</Link>
              <Link to = "/genre" className='link'>Genre</Link>
              <Link to = "/favorites" className='link'>Favorites</Link>
            </div>
            <div className={ham ? "small-links-active" : "small-links"}>
              <div className="small-links-flex">
                <Link to = "/" className='link'>Browse</Link>
                <Link to = "/watchlist" className='link'>Watchlist</Link>
                <Link to = "/genre" className='link'>Genre</Link>
                <Link to = "/favorites" className='link'>Favorites</Link>
                 <div className='cancel'>
                  <img src={x} alt="cancle" />
                  </div>
              </div>
             
            </div>
          </div>
          <div className='sm-ham'>
            <div className='sun-moon' onClick={toggleTheme}>
              {dark ? '☀️' : '࣪🌙' }
            </div>
            <div className='hamburger' onClick={hamburgerFn}>
              <span className='ham-span'></span>
              <span className='ham-span'></span>
              <span className='ham-span'></span>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default NavBar
