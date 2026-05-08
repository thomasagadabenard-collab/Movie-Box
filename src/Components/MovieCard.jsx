import React, { useContext, useState } from 'react'
import dots from '../assets/dots.png'
import Addpopopup from './Addpopopup'
import { MovieContext } from './MovieContext'

const MovieCard = ( {id, image, duration, title, release } ) => {

    

    const [openPop, setPop] = useState(false)

    const {addFavorite, addWatchlist} = useContext(MovieContext)

    const popFn = () => {
        setPop(prev => !prev)
    }

  return (
    <>
        <div className="movie-card">
            <div className="thumbnail">
                <img src={image} alt="Movie Poster" />
                <span className="duration">{duration}</span>

                <button className='dots-btn' onClick={(e) => { e.stopPropagation(); popFn()}}>
                    <img src={dots} alt="dots" className='dots' />
                </button>

            </div>

            {openPop && (
                <Addpopopup
                    movie={{ image, title, release }}
                    onAddFavorite={() => addFavorite({id, image, title, release })}
                    onAddWatchlist={() => addWatchlist({id, image, title, release })}
                />
                )}

            <div className="movie-info" onClick={popFn}>
                <h3 className="title">{title}</h3>
                <p className="release-date">{release}</p>
            </div>
        </div>
    </>
  )
}

export default MovieCard
