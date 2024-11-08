import './App.css'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ArticlePage from './components/ArticlePage'
import {Routes, Route} from "react-router-dom"
import CategoryPage from './components/CategoryPages'

export function App() {


  useEffect(() => {

  }, [])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<div><Homepage/></div>}/>
        <Route path="article/:article_id" element={<ArticlePage/>}/>
        <Route path="topics/:category" element={<CategoryPage/>}></Route>
      </Routes>
    </>
  )
}


