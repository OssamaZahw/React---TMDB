import React from "react";
import { useParams } from "react-router-dom";

import useGetDetails from "../../hooks/useGetDetails";
import Details from "./Details";

export default function TvDetails() {
  const params = useParams();
  const tvID = params.id;
  console.log(tvID)
  const apiUrl = `https://api.themoviedb.org/3/tv/${tvID}?api_key=14bdd69ce887376edfafb09f23f78fe9`;

  const [loading, error, tvData] = useGetDetails(apiUrl)

  if (!loading) {
    console.log(tvData)

    return (
      <>
    <Details
    title={tvData.name}
    background = {tvData.backdrop_path}
    poster = {tvData.poster_path}
    year = {tvData.first_air_date.slice(0,4)}
    description = {tvData.overview}
    />
      </>
    
    );

  } else {
    return (<div>loading...</div>);

  }
}
