import React, { useState } from 'react';

import {Route,Routes} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import './App.css'
import UpcomingMovies from './pages/UpcomingMovies';
import Footer from './components/Footer';
import Index from './pages/Index';
import MovieDetails from './pages/MovieDetails';
import FullCastandCrew from './pages/FullCastandCrew';
import SearchMovies from './pages/SearchMovies';
import Header from './components/Header';


function App() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("")
  const [inputText, setInputText] = useState("")
  

  return(
    <>
    
      <Header/>
      <Routes>
        <Route path='/movieApiz' element={<Index setQuery={setQuery}/>}/>
        <Route path='/:id' element={<MovieDetails/>}/>
        <Route path='/:id/cast' element={<FullCastandCrew/>}/>
        <Route path='/upcoming/' element={<UpcomingMovies/>}/>
        <Route path='/upcoming/:page' element={<UpcomingMovies/>}/>
        <Route path='/search/:page' element={<SearchMovies query={query}/>}/>
      </Routes>
      
      <Footer/>

        
    </>
  )
};


export default App
