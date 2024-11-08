import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { randomNumber } from '../utils/api-requests'

export default function Header (){

    const [randomAlien, setRandomAlien] = useState("logo")
    const navigateTo = useNavigate()

    useEffect(() => {
        setRandomAlien("Logo" + randomNumber())
    }, [])

    function handleClick(event){
        navigateTo(`article/${event.target.text.toLowerCase()}`)
    }

    return (
        <>
        <header className="header-grid">
                <div className="header-grid-item-logo"> 
                    <img  src={`/src/assets/keppit${randomAlien}.png`}></img>
                </div>
                <div className="header-grid-item-title">
                    <h1>keppit</h1>
                </div>
            <div className="header-grid-item-topic">
                <h2></h2>
            </div>
            <div className="header-links">
                <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
                    <a>Home</a>
                </Link>
                    <a onClick={handleClick} value="coding">Coding</a>

                <Link to={`/article/cooking`} style={{textDecoration:'none', color:'inherit'}}>
                    <a>Cooking</a>
                </Link>
                
                    <a>Football</a>
            </div>
        </header>
        </>
    )
}