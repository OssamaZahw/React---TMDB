import React, { useEffect, useState } from "react";
import useGetMovies from "../../hooks/useGetMovies";
import MoviesContainer from "../Shared/MoviesContainer"
import './home.css'

export default function Home() {
  const trendUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9";

  const [apiUrl, setApiUrl] = useState(trendUrl);
  const [loading, error, apiArr] = useGetMovies(apiUrl);
  const [displayArr, setDisplayArr] = useState([]);
  const [filterParam, setFilterParam] = useState('')



  useEffect(() => {
    console.log("Api changed");
    if (!loading) {
      filterMovies(filterParam);
      // setDisplayArr([...apiArr]);
    }
  }, [apiArr, filterParam]);



  const handleSearch = (e) => {
      if (e.target.value){

        const searchParam = e.target.value;
        setApiUrl(
          `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${searchParam}`
          );
          
        } else {
          setApiUrl(trendUrl);
          
        }
  }

  const filterMovies = (type) => {
    if(type){
      const filteredArr = apiArr.filter((el)=> el.media_type == type)
      console.log(filteredArr);
      setDisplayArr(filteredArr);
    } else {
      setDisplayArr(apiArr)

    }
  }



  const handleFilter = (e) => {
    console.log(e.target.value)
    setFilterParam(e.target.value)
    console.log(filterParam)
    filterMovies(filterParam);
  };

  return (
    <>
      <div className="container">
        <div className="search-gp form-group py-5">
        <input type="text" placeholder="Search Here .." className="home-search form-control " onChange={handleSearch} />
        <select name="filter" id="types" className="home-select form-select d-inline " onChange={handleFilter}>
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="tv">TV & Shows</option>
        </select>
        </div>
        <div>
        <p>Latest Movies & TV Shows</p>
        <MoviesContainer loading={loading} displayArr={displayArr} />
        </div>
      </div>
    </>
  );
}




