import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { randomNumber } from '../utils/api-requests'

export default function Header (){

    const [randomAlien, setRandomAlien] = useState("logo")

    useEffect(() => {
        setRandomAlien("Logo" + randomNumber())
    }, [])

    return (
        <>
        <header className="header-grid">
            <div className="header-grid-item-logo">            
                <img id="kpedditLogo" src={`/src/assets/keppit${randomAlien}.png`}></img>
            </div>
            <div className="header-grid-item-title">
                <h1>keppit</h1>
            </div>
            <div className="header-grid-item-topic">
                <h2></h2>
            </div>
        </header>
        </>
    )
}