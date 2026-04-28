import React, { useEffect, useState } from 'react'
import hero from '../assets/heroimage.png'
import search from '../assets/search_icon.svg'
import HeroCard from '../Components/HeroCard'

const Browse = () => {
  const [query, setQuery] = useState("")
  const [movieData, setMovieData] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  console.log(API_KEY);
  


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try{
        let res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        let data = await res.json();

        console.log(data);

        if (!res.ok) {
          setError(true);
        }

        setMovieData(data);

      }catch (error){
        setError("Movie can not be found")

      }finally{
        setLoading(false)
      }
    }
    fetchData();
}, []);

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
          

          {loading && <p>Loading...</p>}

          <div className="mov">
            {movieData?.results?.map((movie) => (
              <HeroCard
                key={movie.id}
                title={movie.title}
                ratings={movie.vote_average}
                release={movie.release_date}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </div>
        </div>


          <div className='search-query'>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='query' placeholder='Search foe movies, actors, genres...'/>
            <div className='search-wrapper'>
              <img src={search} alt="search-logo"className='search-icon' />
            </div>
          </div>
        </div>
      </section>      
    </>
  )
}

export default Browse
