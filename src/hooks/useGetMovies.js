import { useEffect, useState } from "react";

import axios from "axios";

const useGetMovies = (url) => {
  const [movieArr, setMovieArr] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(()=>{
      const loadMovies = async () => {
        try {
            const res = await axios.get(url);
            console.log(await res.data.results)
            setMovieArr(await res.data.results)
            console.log(movieArr);
            setLoading(false);
        } catch(error) {
            console.log(error);
            setError('error from server')
            setLoading(false);
        }
        };
  
        loadMovies();
    }, [])

    return [loading, error, movieArr];
};

export default useGetMovies;
