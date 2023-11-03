import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";


import "./details.css";

export default function Details({
  background,
  poster,
  year,
  title,
  description,
  trailerUrl,
  duration,
  genres,
  date,
  rating,
  status
}) {
  const backdropPath = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
  const posterPath = "https://image.tmdb.org/t/p/w500/";

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const releaseDate = new Date(date)
  // console.log(months[releaseDate.getMonth()])
  // console.log(new Intl.DateTimeFormat('en-US').format(releaseDate))

  const genretxt = genres.map((el,i) =>{
    if (i) {
      return <span key={i}>, {el.name}</span>
    } else {
      return <span key={i}>{el.name}</span>
    }
  }
  )
  return (
    <div className="">
      <div
        className="hero position-relative"
        style={{ backgroundImage: `url(${backdropPath + background})` }}
      >
        <div className="hero-overlay"></div>

        <div className="mov-info container mx-auto row justify-content-center justify-content-md-between  text-white gap-1">

          <figure className="info__poster col-xxl-3 col-lg-4 col-md-6 col-8 d-flex justify-content-center">
            <img
              className="poster-img shadow border border-dark"
              src={posterPath + poster}
              alt=""
            />
          </figure>

          <div className="info__txt col-xxl-8 col-lg-7 col-md-5 col-11 py-2 d-flex flex-column justify-content-between">
            <div className="txt-main">
            <h5>{year}</h5>
            <h1>{title}</h1>
            <p className="sec-txt">{description}</p>

            <div className="txt-accessory">
              <a href={trailerUrl} className="d-flex align-items-center ">
            <FontAwesomeIcon icon={faPlay} className="trailer-btn border rounded-circle p-3"/>
            <span className="trailer-txt ms-2">Watch Trailer</span>
              </a>

              <div className="sec-txt d-flex align-items-center gap-3 mt-3">
                  <span>{Math.floor(duration/60)}h {duration%60}min</span>
                  <FontAwesomeIcon icon={faCircle} className="fa-dot py-2"/>
                  <span>{genretxt}</span>
                  <FontAwesomeIcon icon={faCircle} className="fa-dot py-2" />
                  <span>{months[releaseDate.getMonth()]} {releaseDate.getDate()}, {releaseDate.getFullYear()}</span>
              </div>
            </div>

            </div>



            <div className="info__bottom text-dark  d-flex flex-row flex-md-column flex-lg-row justify-content-between  align-items-center">
              <div className="d-flex align-items-end gap-4 mt-4 mt-lg-0">
                <h5 className="fs-3 fw-bold">{rating} <span className="imdb">IMDB</span></h5>
                <div className="ps-4 border-start d-flex flex-column justify-content-end">
                  <p className="sec-dark-txt mb-2">Status</p>
                  <p className="m-0 fw-bold">{status}</p>
                </div>
              </div>

              <div className="mt-3 mt-lg-0">
              <FontAwesomeIcon icon={faPlus} className="px-4 py-3 btn btn-dark rounded-0"/>
              <FontAwesomeIcon icon={faHeart} className="ms-1 px-4 py-3 btn tbn-light rounded-0 border"/>

              </div>

            </div>

          </div>



        </div>
      </div>
    </div>
  );
}
