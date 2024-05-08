import React, { useEffect } from 'react';
import "./Pagination.css"
import {useNavigate, useParams} from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Pagination({moviesObject, setPage, page, rootURL, query}) {

    const navigate = useNavigate();
    const totalPages = moviesObject.total_pages
    let currentPage = useParams(page)
    let arrayPages = []


    useEffect(() => {
        setPage(Number(currentPage.page))
    }, [arrayPages,page])
    
    

    function buildArrayPages() {
        if (totalPages<10) {
            for (let index = 1; index <= totalPages; index++) {
                arrayPages.push(index)
        }
        return 
        } if (page >= 1 && page<totalPages-7) {
            arrayPages = []
            if (page ===1) {
                for (let index = page; index < page+3; index++) {
                    arrayPages.push(index)
                }
            } else {
                arrayPages.push(1)
                arrayPages.push("...")
                for (let index = page; index < page+3; index++) {
                    arrayPages.push(index)
                }
            }
            arrayPages.push("...",totalPages)
    } if (page >= totalPages-7) {
        arrayPages = []
        arrayPages.push(1)
        arrayPages.push("...")
        for (let index = page; index <= totalPages; index++) {
            arrayPages.push(index)  
            }
        }
        
    }

    buildArrayPages()

    function handlePrev() {
        if (page === 1) {
            return
        } else {
            navigate(`${rootURL}${page-1}`)
            
        }
    }
    
    function handleNext() {
        if (page === totalPages) {
            return
        } else {
            navigate(`${rootURL}${page+1}`)

        }
    }

    function handleDots(e) {
        if (e.target.value < page) {
            navigate(`${rootURL}${Math.ceil(page/2)}`)
        } else {
            if (page*2 < totalPages) {
                navigate(`${rootURL}${Math.ceil(page*2)}`)
            }
        }
    }
    
    function handleButtons(pageInd) {
        navigate(`${rootURL}${pageInd}`)
    }
  return (

    <div>
        <ul className="ul-pagination">

            <button className='btn-not-number' onClick={handlePrev}><IoIosArrowBack /></button>
            {arrayPages.map((pageInd,index) => (
                
                typeof(pageInd) === "number" 
                ? <button className={pageInd === page ? "active-page btn-number":"btn-number"} key={pageInd} onClick={() => handleButtons(pageInd)}>{pageInd}</button>
                : <button className='btn-not-number' value={arrayPages[index-1]} key={index+pageInd} onClick={(e) => handleDots(e)}>{pageInd}</button>
            ))}
            <button className='btn-not-number' onClick={handleNext}><IoIosArrowForward /></button>
        </ul>
    </div>
  )
}
