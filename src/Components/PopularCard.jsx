import React from 'react'

const PopularCard = ( {image, title, date} ) => {
  return (
    <>
        <section className='popular-card-wrapper'>
            <div className='popular-img-wrapper'>
                <img src={image} alt="image" className='popular-img'/>
            </div>    
            <div className='popular-texts'>
                <p>{title}</p>
                <p>{date}</p>
            </div>        
        </section>      
    </>
  )
}

export default PopularCard
