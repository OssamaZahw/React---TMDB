import React, { useEffect, useState } from 'react'
import useGetMovies from '../../hooks/useGetMovies';
import MovieCard from './MovieCard';

export default function Home() {
    const trendUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9'
    const [loading, error, trendArr] = useGetMovies(trendUrl);
    let displayArr = []

    
    if (!loading){
        displayArr = [...trendArr]
        console.log(displayArr)
        const moviesRender = displayArr.map( (el) => (
            <MovieCard 
            key={el.id} 
            title={el.title}
            img={el.poster_path}
            rating = {Math.round(el.vote_average *10)/10}
            />
            ))
        return (
          <>
          <div>Latest Movies & TV Shows</div>
          
          <div>{moviesRender}</div>
          </>
        )

    } else{
        console.log('loading')
        return (
            <p>Loading ..</p>
        )
    }
}
