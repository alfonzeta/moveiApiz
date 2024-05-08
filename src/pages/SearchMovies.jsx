import React from 'react'
import { optionsAuth, SEARCH_URL, DETAIL_SEARCH } from '../store/storage';
import { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom"
import useFetchSearch from '../hooks/useFetchSearch';
import Pagination from '../components/Pagination';
import Index from './Index';
import MovieCard from '../components/MovieCard';
import "./SearchMovies.css"

export default function SearchMovies({query}) {

  const [moviesSearched, setMoviesSearched] = useState("")
  const [moviesSearchedObject, setMoviesSearchedObject] = useState("")
  const [searchPage, setSearchPage] = useState(1)
  const options = optionsAuth
  const alternativeQuery = useParams().query
  const alternativePage = useParams().page
  const urlSearch = `${SEARCH_URL}${alternativeQuery}${DETAIL_SEARCH}${alternativePage}}`
  const rootURL = `/movieApiz/search/${alternativeQuery}/`


  useFetchSearch(urlSearch,options,query, setMoviesSearchedObject, setMoviesSearched,searchPage, alternativeQuery)

  const searchedMoviesBlock = () => {
    return (
        <>
        {alternativeQuery &&
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
