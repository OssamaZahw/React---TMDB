import React from 'react'

export default function MovieCard({title, img, rating}) {

    const imgBase = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='card-cont col'>
        <div className='card-box '>
            <figure>
                <img src={img ? (imgBase + img) : 'https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg' } alt="" />
                <figcaption>{rating}</figcaption>
            </figure>

            <h5>{title}</h5>
        </div>
    </div>
  )
}

