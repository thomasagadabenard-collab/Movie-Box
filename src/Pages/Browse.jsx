import React, { useEffect, useState } from 'react'
import hero from '../assets/heroimage.png'
import search from '../assets/search_icon.svg'
import load from '../assets/loading-svg.svg'

import HeroCard from '../Components/HeroCard'
import MovieCard from '../Components/MovieCard'
import PopularCard from '../Components/PopularCard'
import Modal from '../Components/Modal'

const Browse = () => {
  const [query, setQuery] = useState("")
  const [movieData, setMovieData] = useState([])
  const [searchMovie, setSearchMovie] = useState([])
  const [popular, setPopular] = useState([])

  const [trendingLoading, setTrendingLoading] = useState(false)
  const [movieLoading, setMovieLoading] = useState(false)
  const [popularLoading, setPopularLoading] = useState(false)

  const [trendingError, setTrendingError] = useState("")
  const [movieError, setMovieError] = useState("")
  const [popularError, setPopularError] = useState("")

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const BASE_URL = "https://api.themoviedb.org/3"
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  // =========================
  // FETCH TRENDING MOVIES
  // =========================
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setTrendingLoading(true)
      setTrendingError("")

      try {
        const res = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        )

        const data = await res.json()

        if (!res.ok) {
          throw new Error("Failed to fetch trending movies")
        }

        setMovieData(data.results || [])
      } catch (error) {
        setTrendingError(error.message)
      } finally {
        setTrendingLoading(false)
      }
    }

    fetchTrendingMovies()
  }, [])

  // =========================
  // FETCH POPULAR MOVIES
  // =========================
  useEffect(() => {
    const fetchPopularMovies = async () => {
      setPopularLoading(true)
      setPopularError("")

      try {
        const res = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        )

        const data = await res.json()

        if (!res.ok) {
          throw new Error("Failed to fetch popular movies")
        }

        setPopular(data.results || [])
      } catch (error) {
        setPopularError(error.message)
      } finally {
        setPopularLoading(false)
      }
    }

    fetchPopularMovies()
  }, [])

  // =========================
  // SEARCH MOVIES
  // =========================
  const queryFn = async () => {
    if (query.trim() === "") return

    setMovieLoading(true)
    setMovieError("")

    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error("Movie not found")
      }

      setSearchMovie(data.results || [])
    } catch (error) {
      setMovieError(error.message)
    } finally {
      setMovieLoading(false)
    }
  }

  // =========================
  // OPEN MODAL
  // =========================
  const openModal = (movie) => {
    setSelectedMovie(movie)
    setModalOpen(true)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className='hero-section'>
        <img
          src={hero}
          alt='hero-image'
          className='hero-image'
        />

        <div className='call-to-action'>
          <h1>DISCOVER MOVIES YOU'LL LOVE</h1>

          <p>
            Explore thousands of blockbusters, indie movies and hidden gems.
            <br />
            Your next cinematic adventure starts here
          </p>

          <div className='hero-btns'>
            <button className='explore'>
              EXPLORE NOW
            </button>

            <button className='watchlist'>
              Add to watchlist
            </button>
          </div>

          {/* TRENDING MOVIES */}
          <div className='trends'>
            {trendingLoading && (
              <img
                src={load}
                alt='loading'
                className='load-img'
              />
            )}

            {trendingError && (
              <p>{trendingError}</p>
            )}

            <div className='mov'>
              {movieData.map((movie) => (
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

          {/* SEARCH BAR */}
          <div className='search-query'>
            <input
              type='text'
              value={query}
              className='query'
              placeholder='Search for movies, actors, genres...'
              onChange={(e) =>
                setQuery(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  queryFn()
                }
              }}
            />

            <div className='search-wrapper'>
              <img
                src={search}
                alt='search-logo'
                className='search-icon'
                onClick={queryFn}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH RESULTS */}
      <section className='search-movies-container'>
        {movieError && (
          <p>{movieError}</p>
        )}

        {movieLoading && (
          <img
            src={load}
            alt='loading'
            className='load-img'
          />
        )}

        <div className='searched-movies'>
          {searchMovie.map((movie) => (
            <div
              className='movie-grid'
              key={movie.id}
              onClick={() => openModal(movie)}
            >
              <MovieCard
                id={movie.id}
                image={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/400x220"
                }
                title={movie.title}
                release={movie.release_date}
                duration='N/A'
              />
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR MOVIES */}
      <section className='popular'>
        <h2 className='popular-header'>
          Popular
        </h2>

        {popularLoading && (
          <img
            src={load}
            alt='loading'
            className='load-img'
          />
        )}

        {popularError && (
          <p>{popularError}</p>
        )}

        <div className='popular-grid'>
          {popular.map((movie) => (
            <div
              key={movie.id}
              onClick={() => openModal(movie)}
            >
              <PopularCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                date={movie.release_date}
              />
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL MODAL */}
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
    </>
  )
}

export default Browse