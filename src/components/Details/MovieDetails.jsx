import React from "react";
import { useParams } from "react-router-dom";

import useGetDetails from "../../hooks/useGetDetails";
import Details from "./Details";

export default function MovieDetails() {
  const params = useParams();
  const movieID = params.id;

  const apiUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=14bdd69ce887376edfafb09f23f78fe9`;

  const [loading, error, movieData] = useGetDetails(apiUrl)

 
    if (!loading) {
      // console.log(movieData.title)

      return (
        <>
      <Details
      title={movieData.title}
      background = {movieData.backdrop_path}
      poster = {movieData.poster_path}
      year = {movieData.release_date.slice(0,4)}
      description = {movieData.overview}
      trailerUrl={movieData.homepage}
      duration={movieData.runtime}
      genres={movieData.genres}
      date={movieData.release_date}
      rating={movieData.vote_average}
      status={movieData.status}
      />
        </>
      
      );

    } else {
      return (<div>loading...</div>);

    }

  


}
