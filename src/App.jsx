import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './components/Details/MovieDetails';
import TvDetails from './components/Details/TvDetails';
import Movies from './components/Movies/Movies';
import TvShows from './components/TV Shows/TvShows';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<MovieDetails/>}/>
        <Route path='tv/:id' element={<TvDetails/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='tv' element={<TvShows/>}/>

      </Routes>
    </Router>
    
    </>
  );
}

export default App;
