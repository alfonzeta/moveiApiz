import React, { useState,useEffect } from 'react'
import "./Index.css"
import {useNavigate} from "react-router-dom"
import { DETAIL_TRENDING, POSTER_PATH, TRENDING_URL } from '../store/storage'
import useFetchTrending from '../hooks/useFetchTrending'
import CircleProgressBar from './CircleProgressBar'
import MovieCardTrending from '../components/MovieCardTrending'

export default function Index({setQuery}) {
  
  const navigate = useNavigate();
  const [range, setRange] = useState("day")
  const [trendingMovies, setTrendingMovies] = useState()
  const [randomBackground, SetrandomBackground] = useState("")
  const [backgroundTrigger, setBackgroundTrigger] = useState(false)
  const url = `${TRENDING_URL}${range}${DETAIL_TRENDING}}`

  useFetchTrending(url,setTrendingMovies,range, setBackgroundTrigger)




  useEffect(() => {
    function getRandomArbitrary(min,max) {
      return Math.floor(Math.random() *(max-min) +min)
    }
      if (trendingMovies) {
        const randomNumber = getRandomArbitrary(0,19)
        SetrandomBackground(`${POSTER_PATH}${trendingMovies[randomNumber].poster_path}`)
      }
    }, [backgroundTrigger])
    

  const handleRangeChange = (e) => {
    setRange(e.target.value)
    document.getElementsByClassName("trending-movies")[0].classList.toggle("trending-fade")
  }
  
  const trendingMoviesBlock = () => {
    return (
      trendingMovies &&
        <div className='trending-container'>
        <div className='trending-header'>
          <h3>Trending Movies</h3> 
          <div className='button-range'>
            <div className={`${range==="day" ? "btn-range active-button" : "btn-range"}`}>
              <button value={"day"} onClick={(e) => handleRangeChange(e)}>Today</button>
            </div>
            <div className={`${range==="week" ? "btn-range active-button" : "btn-range"}`}>
            <button value={"week"} onClick={(e) => handleRangeChange(e)}>This week</button>
            </div>
          </div>
        </div>
        <div style={{backgroundImage:`url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")`}} className='trending-movies'>
        {trendingMovies.map(movie => (
          <>
          <MovieCardTrending movie={movie}/>
          </>
          ))}
          </div>
          </div>
      
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search/1`)
    
  }

  const headerMoviesBlock = () => {
    return (
      <div className='first-content'>
        <img className='bg-image' src={`${randomBackground ? randomBackground : "s"}`} alt="" />
        <dir className='bg-overlay' ></dir>
        <div className='text-first-content'>
          <h1>Welcome.</h1>
          <h2>Millons of movies and people to discover. Explore now.</h2>
          <div className='form-container'>
          <form className='form-search-header' onSubmit={(e) => handleSubmit(e)} action="">
            <input onChange={(e) => setQuery(e.target.value)} placeholder='Search for a movie' className='input-search-header' type="text" />
            <input  className='submit-input' type="submit" value="Search" />
          </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
     <div className='container'>
      {headerMoviesBlock()}
      {trendingMoviesBlock()}
    </div>
    </>
  )
}