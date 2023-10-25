import { useEffect, useState } from "react";

import axios from "axios";

const useGetMovies = (url) => {
  const [movieArr, setMovieArr] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const loadMovies = async () => {
    try {
        const res = await axios.get(url);
        console.log( res.data.results)
        setMovieArr( res.data.results)
        console.log(movieArr);
        setLoading(false);
    } catch(error) {
        console.log(error);
        setError('error from')
        setLoading(false);
    }
    };
  useEffect(()=>{
  
        loadMovies();
    }, [url])

    return [loading, error, movieArr];
};

export default useGetMovies;
