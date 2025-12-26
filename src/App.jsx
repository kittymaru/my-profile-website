import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <nav className="m-0 h-[80px] w-full fixed left-0 right-0 bg-red-300 flex flex-row px-10 top-0 justify-evenly text-center">
        navbar
      </nav>

      <nav className="m-0 h-[80px] w-full fixed left-0 right-0 bg-red-300 flex flex-row px-10 bottom-0 justify-evenly text-center">
        footer
      </nav>
    </>
  )
}

export default App
