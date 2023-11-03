import React from 'react'
import { useState,useEffect } from 'react';
import useGetMovies from "../../hooks/useGetMovies";
import MoviesContainer from "../Shared/MoviesContainer"

function TvShows() {
  const trendUrl =
  "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9";

  const [loading, error, trendArr] = useGetMovies(trendUrl);
  const [displayArr, setDisplayArr] = useState([]);

  const filterMovies = () => {
      const filteredArr = trendArr.filter((el)=> el.media_type == 'tv')
      console.log(filteredArr);
      setDisplayArr(filteredArr);
    }

    useEffect(() => {
      if (!loading){
        filterMovies();
      }
    },[loading])

  return (
    <div className="container">
    <div>
    <h3 className='my-4'>Trending Shows</h3>
    </div>
    <MoviesContainer loading={loading} displayArr={displayArr} />
    </div>
    
  )
}

export default TvShows