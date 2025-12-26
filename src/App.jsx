import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <nav className="m-0 h-[80px] w-full fixed left-0 right-0 bg-red-200 flex flex-row px-10 top-0 justify-evenly text-center">
        <div className="flex items-center mr-auto">
          <p className="text-4xl font-bold font-mono text-rose-900">Cathy Yu</p>
        </div>

        <div className="flex items-center">
          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline">Education</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>
          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline">Experience</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>
          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline">Skills</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>
          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline">Projects</p>
        </div>
      </nav>

      <nav className="m-0 h-[50px] w-full fixed left-0 right-0 bg-red-200 flex flex-row px-10 bottom-0 justify-evenly text-center">
        <div className="flex items-center justify-center justify-evenly text-center">
            footer
        </div>
      </nav>
    </>
  )
}

export default App
