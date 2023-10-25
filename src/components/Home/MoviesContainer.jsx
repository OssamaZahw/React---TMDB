import React from 'react'
import MovieCard from "./MovieCard";
export default function MoviesContainer({loading, displayArr}) {


 if (!loading) {
    console.log(displayArr);
    const moviesRender = displayArr.map((el) => (
      <MovieCard
        key={el.id}
        title={el.title}
        img={el.poster_path}
        rating={Math.round(el.vote_average * 10) / 10}
      />
    ));
    return (
      <>
        <div>Latest Movies & TV Shows</div>

        <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2'
        >{moviesRender}</div>
      </>
    );
  } else {
    console.log("loading");
    return <p>Loading ..</p>;
  }
}
