import { useState } from 'react'
import CircleProgressBar from '../pages/CircleProgressBar'
import {POSTER_PATH} from '../store/storage'
import "./MovieCardTrending.css"
import {useNavigate} from "react-router-dom"
import imgPlaceholder from "../assets/no-image-placeholder.png"

export default function MovieCard({movie}) {
  
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(imgPlaceholder)
 
  return (
    <>
          <div onClick={() => navigate(`/${movie.id}-${movie.original_title.split(" ").join("-")}`)} key={movie.id} className='trending-movie'>
          {movie.poster_path 
          ? <img onLoad={() => setImageLoaded(POSTER_PATH+movie.poster_path)} src={imageLoaded} alt="" />
          : <img src={imgPlaceholder}/>
          }
              <div className='circle-progress'>
              <CircleProgressBar  percentage={movie.vote_average.toFixed(1)*10} circleWidth="200" size={4}/>
              </div>
              <div className='text-movie'>
            <h4>{movie.title}</h4>
            <small>{movie.release_date}</small>
              </div>
          </div>
          </>
    
  )
}
