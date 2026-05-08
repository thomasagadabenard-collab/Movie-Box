import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'

const Genre = () => {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const genres = [
    { id: 28, name: "Action" },
    { id: 878, name: "Sci-Fi" },
    { id: 35, name: "Comedy" },
    { id: 10749, name: "Romance" },
    { id: 27, name: "Horror" },
    { id: 16, name: "Animation" },
    { id: 53, name: "Thriller" },
    { id: 18, name: "Drama" },
  ];

  const [genreMovies, setGenreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchMovies = async (url, setState, setLoading, setError) => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();

      setState(data.results || data.genres || []);
      
    } catch (error) {
      console.log(error);
      setError(true);

    } finally {
      setLoading(false);
    }
  };

  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchGenreMovies = (genre) => {
    setSelectedGenre(genre.name);

    fetchMovies(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`,
      setGenreMovies,
      setLoading,
      setError
    );
  };

  

  return (
    <>
      <section className='genre-hero'>
        <div className='genre-flex'>
          <div className="genre-buttons">
            {genres.map((genre) => (
              <button
              className='genre-btn'
                key={genre.id}
                onClick={() => fetchGenreMovies(genre)}
              >
                {genre.name}
              </button>
            ))}
          </div>

          <div className='flex-render'>
            <h2 >Discover movies by genre -&gt; {selectedGenre}</h2>          
            <div>
              {loading && <p>Loading...</p>}
              {error && <p>Something went wrong...</p>}

              
              <div className="genre-grid">
                {genreMovies.map((movie) => (
                  <div className="genre-card" key={movie.id}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "https://via.placeholder.com/400x220"
                      }
                      alt={movie.title}
                    />

                    <div className="genre-info">
                      <h3>{movie.title}</h3>
                      <p>{movie.release_date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
         </div>
        </div>         
      </section>

     
    </>
  )
}

export default Genre
