import React, { useState } from 'react';
import './UpcomingMovies.css';
import Pagination from '../components/Pagination';
import usefetchUpcoming from '../hooks/useFetchUpcoming';
import { UPCOMING_URL, optionsAuth, POSTER_PATH } from '../store/storage';
import MovieCard from '../components/MovieCard';
export default function UpcomingMovies() {

    
    const [moviesObject, setMoviesObject] = useState({})
    const [page, setPage] = useState(1)
    const [upcomingMovies, setUpcomingMovies] = useState([])
  
    const url = UPCOMING_URL
    const rootURL = "/movieApiz/upcoming/"
    const options = optionsAuth
  
    usefetchUpcoming(url,page, options,setMoviesObject, setUpcomingMovies)
    return (
        <div className='main-content'>
            <h2>UPCOMING MOVIES</h2>
      <Pagination moviesObject={moviesObject} setPage={setPage} page={page} rootURL={rootURL}/>

            <ul  className='movies-container'>
                {upcomingMovies.map((movie, index) => (
                    <>
                    {upcomingMovies &&
                    <MovieCard movie={movie} index={index}/>
                    }
                    </>
                ))}
            </ul>
        </div>

    );
}
