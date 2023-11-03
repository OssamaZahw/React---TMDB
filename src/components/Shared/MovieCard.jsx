import React from 'react'
import { Link } from "react-router-dom";
import './movieCard.css'


export default function MovieCard({id, title, img, rating, type}) {

    const imgBase = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='card-cont col'>
        <div className='card-box '>
            <figure className='position-relative'>
              <Link to={`/${type}/${id}`} >
                <img src={img ? (imgBase + img) : 'https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg' } alt="" />
                <figcaption className='mov-rating'>{rating}</figcaption>
              </Link>
            </figure>

            <h5>{title}</h5>
        </div>
    </div>
  )
}

