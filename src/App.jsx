import React, { useState } from 'react';
import {Route,Routes} from "react-router-dom"
import './App.css'
import UpcomingMovies from './pages/UpcomingMovies';
import Footer from './components/Footer';
import Index from './pages/Index';
import MovieDetails from './pages/MovieDetails';
import FullCastandCrew from './pages/FullCastandCrew';
import SearchMovies from './pages/SearchMovies';
import Header from './components/Header';


function App() {
  const [query, setQuery] = useState("")
  

  return(
    <>
    
      <Header setQuery={setQuery}/>
      <Routes>
        <Route path='/movieApiz' element={<Index setQuery={setQuery} query={query}/>}/>
        <Route path='/movieApiz/:id' element={<MovieDetails/>}/>
        <Route path='/movieApiz/:id/cast' element={<FullCastandCrew/>}/>
        <Route path='/movieApiz/upcoming/:page' element={<UpcomingMovies/>}/>
        <Route path='/movieApiz/search/:query/:page' element={<SearchMovies query={query}/>}/>
      </Routes>
      
      
      <Footer/>

        
    </>
  )
};


export default App
