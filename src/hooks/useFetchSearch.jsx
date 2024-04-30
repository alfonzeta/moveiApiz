import { useEffect } from 'react'
export default function useFetchSearch(url, option,query, setState, setMoviesSearched, searchPage) {

    useEffect(() => {
        fetch(url,option)
        .then(response => response.json())
        .then(response => {
            setState(response)
            setMoviesSearched(response.results)
        }
    )
        .catch(err => console.error(err));
    }, [query,searchPage])
    
}
