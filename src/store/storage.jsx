export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page='
export const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?query='
export const POSTER_PATH = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/";
export const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/'
export const optionsAuth = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDUwZjliNzYzM2IxZWZiZjdhYjU4YzJjZjViMzE2YSIsInN1YiI6IjY2MWQ2MTk1MWU2NDg5MDE2MmQ0OGFlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcVJ9Dq6yUDiM2NYk2Hj68jg6tq-L5WzLdb6_IRX6Nc'
  }
}

export const DETAIL_SEARCH = `&include_adult=false&language=en-US&page=`
export const DETAIL_URL = "https://api.themoviedb.org/3/movie/"
export const DETAIL_VIDEO = `/videos?language=en-US`
export const DETAIL_CAST = `/credits?language=en-US`
export const DETAIL_REVIEWS = `/reviews?language=en-US&page=1`
export const DETAIL_KEYWORDS = `/keywords`
export const DETAIL_TRENDING = `?language=en-US`
