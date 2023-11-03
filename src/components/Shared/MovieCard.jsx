import React from 'react'
import { Link } from "react-router-dom";
import './movieCard.css'


export default function MovieCard({id, title, img, rating, type}) {

    const imgBase = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='card-cont col'>
        <div className='card-box shadow h-100 rounded-bottom'>
            <figure className='position-relative'>
              <Link to={`/${type}/${id}`} >
                <img src={img ? (imgBase + img) : 'https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg' } alt="" />
                <figcaption className='mov-rating p-1 fw-semibold text-white'>{rating}</figcaption>
              </Link>
            </figure>

            <h5 className='text-center'>{title}</h5>
        </div>
    </div>
  )
}

