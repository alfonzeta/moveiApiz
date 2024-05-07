import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DETAIL_CAST, DETAIL_URL, optionsAuth } from '../store/storage';
import "./FullCastandCrew.css"
import male from "../assets/male.png"
import female from "../assets/female.png"


export default function FullCastandCrew() {

  const [movieCastPage, setMovieCastPage] = useState([])
  const [movieCrewPage, setMovieCrewPage] = useState([])
  const POSTER_PATH = 'https://image.tmdb.org/t/p/original/';
  
  const { id } = useParams();
  const urlCast = DETAIL_URL+id+DETAIL_CAST
  useEffect(() => {
    fetch(urlCast,optionsAuth)
    .then(response => response.json())
    .then(response => {
        setMovieCastPage(response.cast)
        setMovieCrewPage(response.crew)
    }
)
    .catch(err => console.error(err));
}, [])    

  return (
    <>
      <div className='container-cast'>
        <div className='cast'>
          <ul>
            <h3>Cast</h3>
            {movieCastPage.map(person => (
             <div key={person.cast_id} className='person-cast'>
             {person.profile_path
               ? <img src={POSTER_PATH+person.profile_path} alt="" />
               : person.gender === 1
                 ? <img src={female} alt="" />
                 : <img src={male} alt="" />
             }
             <div className='person-cast-text'>
             <strong>{person.name}</strong>
             <p>{person.character}</p>
             </div>
           </div>
            ))}
          </ul>
        </div>
        <div className='cast'>
          <ul>
            <h3>Crew</h3>
            {movieCrewPage.map(person => (
             <div key={person.cast_id} className='person-cast'>
             {person.profile_path
               ? <img src={POSTER_PATH+person.profile_path} alt="" />
               : person.gender === 1
                 ? <img src={female} alt="" />
                 : <img src={male} alt="" />
             }
             <div className='person-cast-text'>
             <strong>{person.name}</strong>
             <p>{person.job}</p>
             </div>
           </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
