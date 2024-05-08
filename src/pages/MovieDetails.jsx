import { useEffect, useState } from 'react';
import './MovieDetails.css';
import useFetchDetails from '../hooks/useFetchDetails';
import { DETAIL_CAST, DETAIL_KEYWORDS, DETAIL_REVIEWS, DETAIL_URL, DETAIL_VIDEO, optionsAuth } from '../store/storage';
import { Navigate, useParams } from 'react-router-dom';
import { CiLink } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

import CircleProgressBar from './CircleProgressBar';
import {useNavigate} from "react-router-dom"
import male from "../assets/male.png"
import female from "../assets/female.png"
export default function MovieDetails() {
  const navigate = useNavigate();
  const POSTER_PATH = 'https://image.tmdb.org/t/p/original/';
  const YT_PATH = "https://www.youtube.com/embed/"
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [movieVideo, setMovieVideo] = useState("")
  const [movieCast, setMovieCast] = useState("")
  const [movieCrew, setMovieCrew] = useState("")
  const [movieReviews, setMovieReviews] = useState("")
  const [movieKeywords, setMovieKeywords] = useState("")

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  
  const fetchAllInfo = () => {
      const url = DETAIL_URL;
      const options = optionsAuth;  
      const urlVideo = DETAIL_URL+id+DETAIL_VIDEO
      const urlCast = DETAIL_URL+id+DETAIL_CAST
      const urlReviews = DETAIL_URL+id+DETAIL_REVIEWS
      const urlKeywords = DETAIL_URL+id+DETAIL_KEYWORDS
      useFetchDetails(url, id, options, setMovieDetails,urlVideo, setMovieVideo, urlCast,setMovieCast,setMovieCrew, urlReviews, setMovieReviews, urlKeywords, setMovieKeywords);
    
  }
  
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  fetchAllInfo()

  const buildMovieGenres = (movieDetails) => {
    let movieGenres = ""
    
    {movieDetails && movieDetails.genres.map(movie => movieGenres = movieGenres+" "+movie.name+",")
    movieGenres = movieGenres.substring(0,movieGenres.length-1)}
    return movieGenres
    
  }
  const buildTotalRuntime = (movieDetails) => {
    const hours = Math.floor(movieDetails.runtime/60)
    const minutes = (((movieDetails.runtime/60)-hours)*60).toFixed(0)
    const runtime = `${hours}h ${minutes}m`
    return runtime
  }

  const movieHeader = () => {
    return(

      <div className='movie-details-container'>

      <>
      <div
        className='movie-details-background'
        style={{
          backgroundImage: `url(${movieDetails.backdrop_path ? POSTER_PATH + movieDetails.backdrop_path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'})`
        }}
        >
        <div className='movie-details-content'>
      <img
        className='image-details'
        src={`${movieDetails.poster_path ? POSTER_PATH + movieDetails.poster_path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}`}
        alt=''
        />
        <div className='movie-details-text'>
          <div>
            <h2>{movieDetails.title}</h2>
            <span>{` (${movieDetails.release_date.slice(0,4)})`}</span>
            <span className='movie-details-facts'>
              {`${movieDetails.release_date}
              (${movieDetails.original_language.toUpperCase()}) |
              ${buildMovieGenres(movieDetails)} |
              ${buildTotalRuntime(movieDetails)}
              `}
            </span>
          </div>
          <CircleProgressBar percentage={movieDetails.vote_average.toFixed(1)*10} circleWidth="200" size={2}/>
          <div>
          <h3 className='tagline'>{movieDetails.tagline}</h3>
            <h5>Overview</h5>
            <p>{movieDetails.overview}</p>
          </div>
          
          <ul className='ul-crew'>
            {movieCrew && movieCrew.slice(0,2).map(crew => (
              <li key={crew.job+crew.id}>
                <strong>
                  <p>
                {crew.job}
                  </p>
                </strong>
                <p>
                  {crew.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
        </>
  </div>
    )
  }

  const movieCastBlock = () => {
    return (

      <>
      <div  className='first-section'>
      <h3>Top Billed Cast</h3>
        <div className='cast-container'>
          {movieCast && movieCast.slice(0,15).map(person => (
            (<div key={person.cast_id} className='cast-info'>
              {person.profile_path 
                ? <img src={POSTER_PATH+person.profile_path} alt="" />
                : person.gender === 1
                  ? <img src={female} alt="" />
                  : <img src={male} alt="" />
              }
              <div className='cast-text'>
              <strong>{person.name}</strong>
              <p>{person.character}</p>
              </div>
            </div>)
          ))}
          <button onClick={() => navigate(`/movieApiz/${id}/cast`)} className='btn-full-cast'><FaArrowRight size={"30px"} color='white'/></button>
        </div>
        </div>
      </>
    )

  }

  const movieMedia = () => {
    return(
      movieVideo &&
        <>
        <div className='second-section'>
          <h3>Media</h3>
          <div className='videos-container'>
            {movieVideo.map(video => (
          
              <iframe  className='frame-video' key={video.id} width="600" height="300" frameBorder={"0"} src={YT_PATH+video.key}></iframe>
            ))}
          </div>
        </div>
        </>
       
    )
  }
  const movieExtraInfo = () => {
    return (
      <div id='movie-extra-info' className='movie-extra-info fader-true'>
            <a href={movieDetails.homepage} alt="homepage" title='homepage' target='_blank'>
            <CiLink style={{display:"block"}}size={"50px"}/>
            </a>
            <div>
              <strong>Status</strong>
              <p>{`${movieDetails.status}`}</p>
            </div>
            <div>
              <strong>Original language</strong>
              {movieDetails.spoken_languages[0]
              ?<p>{movieDetails.spoken_languages[0].name}</p>
              :<p>N/A</p>
              }
            </div>
            <div>
              <strong>Budget</strong>
              {movieDetails.budget > 0
              ? <p>{USDollar.format(movieDetails.budget)}</p>
              : <p>N/A</p>}
            </div>
            <div>
              <strong>Revenue</strong>
              {movieDetails.revenue > 0
              ? <p>{USDollar.format(movieDetails.revenue)}</p>
              : <p>N/A</p>}
            </div>
            <div className='production-companies'>
              <strong >Production companies</strong>
              {movieDetails.production_companies.slice(0,6).map(company => (
                <span key={company.id}>{company.name}</span>
              ))}
            </div>
              <div>
                <strong>Keywords</strong>
                {movieKeywords &&
                            <ul className='ul-keywords'>
                            {movieKeywords.map(keyword => (
                <li key={keyword.id}>{keyword.name}</li>
                            ))}
                            </ul>
                            }
              </div>
      </div>

    )
  }

  
  const SocialComponent = ({review}) =>{
  const [viewMore, setViewMore] = useState(false)
  return (
    <>
    {viewMore ? 
      <>
      <p dangerouslySetInnerHTML={{ __html: review.content }} />
      <button onClick={() => setViewMore(!viewMore)}>View less</button>
      </>
      : 
      <>
      <p dangerouslySetInnerHTML={{ __html: `${review.content.slice(0,200)}...` }} />
      <button onClick={() => setViewMore(!viewMore)}>View more</button>
      </>
    }
    </>
  )
  }

  const socialBlock = () => {
    return (
      <div className='review-container'>
      <div className='review-header'>

      <h3>Social</h3>
      <strong>{`(${movieReviews.length} reviews)`}</strong>
      </div>
      <div className='review-content'>
        {movieReviews && movieReviews.map(review => (
          <div key={review.id} className='review-details'>
            <div className='review-image-title'>
              <img src={review.author_details.avatar_path ? POSTER_PATH+review.author_details.avatar_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="" />
              <div className='review-text'>
                <strong>{`A review by ${review.author_details.username}`}</strong>
                <small>{`Written by ${review.author_details.username} on ${formatDate(review.created_at)}`}</small>
              </div>
            </div>
            <SocialComponent review={review}/>
          </div>
        ))}
      </div>
    </div>
    )
  }
  return (
    <div className='placeholder-div'>
    {movieDetails &&
    <>
      {movieHeader()}
      <div className='movie-info-container'>
      {movieCastBlock()}
      {movieExtraInfo()}
      {movieMedia()}
      {socialBlock()}
      </div>
    </>}
    </div>
  );
}
