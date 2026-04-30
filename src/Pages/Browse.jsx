import React, { useEffect, useState } from 'react'
import hero from '../assets/heroimage.png'
import search from '../assets/search_icon.svg'
import HeroCard from '../Components/HeroCard'
import load from '../assets/loading-svg.svg'
import MovieCard from '../Components/MovieCard'
import Modal from '../Components/Modal'

const Browse = () => {
  const [query, setQuery] = useState("")
  const [movieData, setMovieData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchMovie, setSearchMovie] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)


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

    const queryFn = async (query) => {
      if(query.trim() === "") {
        return
      }

      try{
        setLoading(true)
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        const data = await res.json();
        console.log(data);
        setSearchMovie(data.results)

      } catch (error){
        console.log("error");
      } finally{
        setLoading(false)
      }
      
    }

  return (
    <>

      <section className='hero-section'>
        <img src={hero} alt="hero-image"  className='hero-image'/>
        <div className='call-to-action'>
          <h1>DISCOVER MOVIES YOU'LL LOVE</h1>
          <p>Explore thousands of blockbusters, indie movies and hidden gems. <br /> Your next cinematic adventure starts here</p>
          <div className='hero-btns'>
            <button className='explore'>EXPLORE NOW</button>
            <button className='watchlist'>Add to watchlist</button>
          </div>

          <div className='trends'>
          

          {loading && <img src={load} alt='loading image' className='load-img'/>}
          {error && <p>Something went wrong...</p>}

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
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='query' placeholder='Search for movies, actors, genres... ' onKeyDown={(e) => {
              if(e.key === "Enter"){
                queryFn(query)
              }
            }}/>
            <div className='search-wrapper'>
              <img src={search} alt="search-logo"className='search-icon' onClick={() => queryFn(query)}/>
            </div>
          </div>
        </div>
      </section>      

      <section className='search-movies-container'>
        {error && <p>Something went wrong...</p>}
        <div className="searched-movies">
          {loading ? <p>Loading</p> : searchMovie && searchMovie.map((movie) => (
            <div className="movie-grid" key={movie.id} onClick={() => {
                setSelectedMovie(movie);
                setModalOpen(true);
              }}>
              <MovieCard
                image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/400x220"
                }
                title={movie.title}
                release={movie.release_date}
                duration="N/A" 
              />
            </div>
          ))}
        </div>

        {modalOpen && selectedMovie && (
            <Modal
              image={
                selectedMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                  : "https://via.placeholder.com/400x220"
              }
              overview={selectedMovie.overview}
              title={selectedMovie.title}
              onClose={() => setModalOpen(false)}
            />
          )}
      </section>
    </>
  )
}

export default Browse
