import React from 'react'

export default function MovieCard({title, img, rating}) {

    const imgBase = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='card-cont'>
        <div className='card-box'>
            <figure>
                <img src={imgBase + img} alt="" />
                <figcaption>{rating}</figcaption>
            </figure>

            <h3>{title}</h3>
        </div>
    </div>
  )
}

