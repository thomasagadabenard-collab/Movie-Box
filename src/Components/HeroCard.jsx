import React from 'react'

const HeroCard = ( {image, title, ratings, release} ) => {
  return (
    <>
        <section className='hero-card'>
            <div className='hero-img-div'>
                <img src={image} alt="image" />
            </div>
            <div className='hero-text'>
                <h3>{title}</h3>
                <p>⭐{ratings} <small className='trending'>trending</small></p>
            </div>
        </section>
      
    </>
  )
}

export default HeroCard
