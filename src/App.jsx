import { useState, createContext  } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ArticlePage from './components/ArticlePage'
import {Routes, Route} from "react-router-dom"

export function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="article/:article_id" element={<ArticlePage/>}/>
      </Routes>
    </>
  )
}


