import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/kpedditLogo1.png'

export default function Header (){

    return (
        <>
        <div className="header-grid">
            <div className="header-grid-item-logo">            
                <img id="kpedditLogo" src={logo}></img>
            </div>
            <div className="header-grid-item-title">
                <h1>keppit</h1>
            </div>
            <div className="header-grid-item-topic">
                <h2></h2>
            </div>
        </div>
        </>
    )
}