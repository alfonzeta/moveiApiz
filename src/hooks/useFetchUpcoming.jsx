import React from 'react';
import { useEffect } from 'react'
export default function useFetch(url,page, option, setState, setMovies) {

    useEffect(() => {
        fetch(url+page,option)
        .then(response => response.json())
        .then(response => {
            setState(response)
            setMovies(response.results)
        }
    )
        .catch(err => console.error(err));
    }, [page])
    
}
