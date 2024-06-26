import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom"
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {NavLink} from "react-router-dom"
import "./Header.css"

export default function Header({setQuery, query}) {

  const navigate = useNavigate();
  const [inputText, setInputText] = useState("")
  const [showSearch, setshowSearch] = useState(false)

  function handleSearch() {
    setshowSearch(!showSearch)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setshowSearch(!showSearch)
    navigate(`/movieApiz/search/${inputText}/1`)
    setInputText("")
  }

  function handleChangeInput(e) {
    setQuery(e.target.value)
    setInputText(e.target.value)
    navigate(`/movieApiz/search/${e.target.value}/1`)
    
  }
    
  return (
    <>
        <nav className="header-container">
            <NavLink to={"/movieApiz"}>{<img src={logo}></img>}</NavLink>
            <NavLink to={"/movieApiz/upcoming/1"}><h3 className='upcoming-title'>Upcoming</h3></NavLink>
            {showSearch 
            ? <span onClick={handleSearch}><RxCross2 size={"40px"} cursor={"pointer"} color='white'/></span>
            : <span onClick={handleSearch}><IoMdSearch size={"40px"} cursor={"pointer"} color='white'/></span>
            }
        </nav>
        {showSearch &&
        <form className='form-search2' onSubmit={(e) => handleSubmit(e)} action="">
            <IoMdSearch onClick={() => navigate(`/movieApiz/search/${query}/1`)} color='white' cursor={"pointer"} size={"30px"}/>
            <input autoFocus  onChange={(e) => handleChangeInput(e)} placeholder='Search for a movie' className='input-search' type="text" />
            <RxCross2 onClick={() => setshowSearch(!showSearch)} color='white' cursor={"pointer"} size={"40px"}/>
        </form>
        }
    </>
  )
}
