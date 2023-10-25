import React, { useEffect, useState } from "react";
import useGetMovies from "../../hooks/useGetMovies";
import MoviesContainer from "./MoviesContainer";

export default function Home() {
  const trendUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9";

  const [apiUrl, setApiUrl] = useState(trendUrl);
  const [loading, error, apiArr] = useGetMovies(apiUrl);
  const [displayArr, setDisplayArr] = useState([]);

  useEffect(() => {
    console.log("changed");
    if (!loading) {
      setDisplayArr([...apiArr]);
    }
  }, [apiArr]);

  const testSearch = () => {
    setApiUrl(
      "https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=miss"
    );
  };

  const filter = () => {
    setDisplayArr([]);
    console.log(displayArr);
  };

  return (
    <>
      <div className="container">
        <button onClick={testSearch}>search Miss</button>
        <select name="filter" id="types" onChange={filter}>
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="tv">TV & Shows</option>
        </select>
        <MoviesContainer loading={loading} displayArr={displayArr} />
      </div>
    </>
  );
}

// old code:

//   const [displayArr, setDisplayArr] = useState([]);

//   if (!loading) {
//     setDisplayArr(trendArr)
//   }

//   let displayArr = [];
//   displayArr = trendArr;
