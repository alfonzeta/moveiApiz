import { useEffect } from 'react'
import { optionsAuth } from '../store/storage';
export default function useFetchTrending(url,setTrendingMovies,range,setBackgroundTrigger) {

    useEffect(() => {
        fetch(url,optionsAuth)
        .then(response => response.json())
        .then(response => {
            setTrendingMovies(response.results)
            setBackgroundTrigger(true)

        }
    )
        .catch(err => console.error(err));
    }, [range])
    
}
