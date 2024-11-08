import React, { useState, useEffect, useContext} from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../contexts/User'
import { randomNumber } from '../utils/api-requests'

export default function Header (){

    const [randomAlien, setRandomAlien] = useState("logo")
    const [homeClass, setHomeClass] = useState("clicked-page")
    const [codingClass, setCodingClass] = useState("header-Link")
    const [cookingClass, setCookingClass] = useState("header-Link")
    const [footballClass, setFootballClass] = useState("header-Link")
    const [normalCounter, setNormalCounter] = useState(0)
    const {user, setUser} = useContext(UserContext)


    useEffect(() => {
            setRandomAlien("Logo" + randomNumber())
    }, [homeClass])

    function handleClick(event){
        setHomeClass("header-Link")
        setCodingClass("header-Link")
        setCookingClass("header-Link")
        setFootballClass("header-Link")
        if(event.target.text === "Home"){
            setHomeClass("clicked-page")
        }else
        if(event.target.text === "Coding"){
            setCodingClass("clicked-page")
        }else
        if(event.target.text === "Cooking"){
            setCookingClass("clicked-page")
        }else
        if(event.target.text === "Football"){
            setFootballClass("clicked-page")
        }
    }

    function randomiseAlien(){
        if(normalCounter<10){
            setRandomAlien("Logo" + randomNumber())
            setNormalCounter(a => a + 1)
        }else{
            setRandomAlien("LogoSecret")
            setNormalCounter(0)
        }
    }
    
    
    return (
        <>
        <header className="header-grid">
                <div className="header-grid-item-logo"> 
                    <img  src={`/src/assets/keppit${randomAlien}.png`}></img>
                </div>
                <div className="header-grid-item-title">
                    <h1 onClick={randomiseAlien}>keppit</h1>
                </div>
            <div className="header-grid-item-topic">
                <h2>User: {user}</h2>
            </div>
            <div className="header-links">
                <Link  value="Home" className={homeClass} to={'/'} style={{textDecoration:'none'}} onClick={handleClick}>
                    Home
                </Link>
                <Link value="Coding "className={codingClass} to={`/topics/coding`} style={{textDecoration:'none'}} onClick={handleClick}>
                    Coding
                </Link>
                <Link value="Cooking" className={cookingClass} to={`/topics/cooking`} style={{textDecoration:'none'}} onClick={handleClick}>
                    Cooking
                </Link>
                <Link value="Football" className={footballClass} to={`/topics/football`} style={{textDecoration:'none'}} onClick={handleClick}>
                    Football
                </Link>
            </div>
        </header>
        </>
    )
}