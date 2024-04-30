import React from 'react'
import { optionsAuth, SEARCH_URL, DETAIL_SEARCH, POSTER_PATH } from '../store/storage';
import { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom"
import useFetchSearch from '../hooks/useFetchSearch';
import Pagination from '../components/Pagination';
import Index from './Index';
import MovieCard from '../components/MovieCard';
import "./SearchMovies.css"

export default function SearchMovies({query}) {

  const navigate = useNavigate();
  const [moviesSearched, setMoviesSearched] = useState("")
  const [moviesSearchedObject, setMoviesSearchedObject] = useState("")
  const [searchPage, setSearchPage] = useState(1)
  const urlSearch = `${SEARCH_URL}${query}${DETAIL_SEARCH}${searchPage}}`
  const rootURL = "/search/"
  const options = optionsAuth



  useFetchSearch(urlSearch,options,query, setMoviesSearchedObject, setMoviesSearched,searchPage)

  const searchedMoviesBlock = () => {
    return (
        <>
        {query &&
            <Pagination moviesObject={moviesSearchedObject} setPage={setSearchPage} page={searchPage} rootURL={rootURL}/>
        }    

            <ul className='movies-container-search'>
                {moviesSearched.map((movie, index) => (
                    <>
                    <MovieCard movie={movie} index={index}/>
                    </>
                ))}
            </ul>
        </>
    )
  }
  const searchNotMatches = () => {
    return(
        <>
        <p>There are no movies that matched your query.</p>
        <Index/>
        </>
    )
  }

  return (
    <>

    {moviesSearched &&
    <div className='main-content'>
            <h2>Searched MOVIES</h2>
            {moviesSearched.length===0 
            ? searchNotMatches()
            : searchedMoviesBlock()
        }

        </div>
}
    </>

  )
}
