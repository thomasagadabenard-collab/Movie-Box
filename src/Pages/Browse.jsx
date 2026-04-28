import React, { useState } from 'react'
import hero from '../assets/heroimage.png'

const Browse = () => {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  return (
    <>
      <section className='hero-section'>
        <img src={hero} alt="hero-image"  className='hero-image'/>
        <div className='call-to-action'>
          <h1>DISCOVER MOVIES YOU'LL LOVE</h1>
          <p>Explore thousands of blockbuster, indie movies and hidden gems. <br /> Your next cinematic adventure starts here</p>
          <div className='hero-btns'>
            <button className='explore'>EXPLORE NOW</button>
            <button className='watchlist'>Add to watchlist</button>
          </div>

          <div className='trends'>
            <h2>TRENDING</h2>
          </div>


          <div className='search-query'>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='query'/>
            <img src="" alt="search-logo"className='search-icon' />
          </div>
        </div>
      </section>      
    </>
  )
}

export default Browse
