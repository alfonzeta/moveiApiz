import { useEffect } from 'react'
export default function useFetchDetails(url, id, option, setState, urlVideo, setMovieVideo, urlCast,setMovieCast, setMovieCrew, urlReviews, setMovieReviews, urlKeywords,setMovieKeywords) {

    useEffect(() => {
        fetch(url+id,option)
        .then(response => response.json())
        .then(response => {
            setState(response)
        }
    )
        .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        fetch(urlVideo,option)
        .then(response => response.json())
        .then(response => {
            setMovieVideo(response.results)
        }
    )
        .catch(err => console.error(err));
    }, [])
    
    useEffect(() => {
        fetch(urlCast,option)
        .then(response => response.json())
        .then(response => {
            setMovieCast(response.cast)
            setMovieCrew(response.crew)
        }
    )
        .catch(err => console.error(err));
    }, [])
 
    useEffect(() => {
        fetch(urlReviews,option)
        .then(response => response.json())
        .then(response => {
            setMovieReviews(response.results)
        }
    )
        .catch(err => console.error(err));
    }, [])
    
    useEffect(() => {
        fetch(urlKeywords,option)
        .then(response => response.json())
        .then(response => {
            console.log(response.keywords);
            setMovieKeywords(response.keywords.slice(0,6))
        }
    )
        .catch(err => console.error(err));
    }, [])
    
}