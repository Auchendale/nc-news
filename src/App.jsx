import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
