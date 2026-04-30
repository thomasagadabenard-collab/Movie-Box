import React from 'react'

const MovieCard = ( { image, duration, title, release } ) => {
  return (
    <>
        <div className="movie-card">
            <div className="thumbnail">
                <img src={image} alt="Movie Poster" />
                <span className="duration">{duration}</span>
            </div>

            <div className="movie-info">
                <h3 className="title">{title}</h3>
                <p className="release-date">{release}</p>
            </div>
        </div>
    </>
  )
}

export default MovieCard
