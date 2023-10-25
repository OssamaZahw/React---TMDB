import React from "react";

export default function Details({ background, poster, year, title, description }) {
  const backdropPath = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
  const posterPath = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="container mx-auto">
      <div className="backdrop">
        <figure>
          <img src={backdropPath + background} alt="" />
        </figure>
      </div>

      <div className="row">
        <figure className="col-3">
          <img src={posterPath + poster} alt="" />
        </figure>

        <div className="col-6">
            <h5>{year}</h5>
          <h2>{title}</h2>
            <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
}
