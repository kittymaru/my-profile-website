import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'

import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <>
      <nav className="m-0 h-[80px] w-full fixed left-0 right-0 bg-red-200 flex flex-row px-10 top-0 justify-evenly text-center">
        <div className="flex items-center mr-auto">
          <p className="text-4xl font-bold font-mono text-rose-900 hover:text-rose-700 hover:underline"
            onClick={() => navigate("/")}>Cathy Yu</p>
        </div>

        <div className="flex items-center">
          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline"
            onClick={() => navigate("/education")}>Education</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>

          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline"
            onClick={() => navigate("/experience")}>Experience</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>

          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline"
            onClick={() => navigate("/skills")}>Skills</p>
          <p className="text-3xl font-bold font-mono text-rose-900 mr-5">|</p>

          <p className="text-2xl font-bold font-mono text-rose-900 mr-5 hover:text-rose-700 hover:underline"
            onClick={() => navigate("/projects")}>Projects</p>
        </div>
      </nav>

      {location === "/" && (
        <>
          <p className="animate-pulse text-5xl text-rose-900 mb-5">welcome to my page :)</p>
          <p className="animate-pulse text-xl text-rose-900">click on any header text to continue</p>
        </>
      )}

      <nav className="m-0 h-[50px] w-full fixed left-0 right-0 bg-red-200 flex flex-row px-10 bottom-0 justify-evenly text-center">
        <div className="flex items-center justify-center justify-evenly text-center">
          <img src="/github-mark-white.svg" className="h-[30px] w-[30px] mr-5 hover:scale-120 transition-transform duration-200"
            onClick={() => window.open("https://github.com/kittymaru")}></img>

          <img src="/linkedin-svgrepo-com.svg" className="h-[30px] w-[30px] hover:scale-120 transition-transform duration-200"
            onClick={() => window.open("https://www.linkedin.com/in/cathy-yu-938b6b261/")}></img>
        </div>
      </nav>

      <Routes>
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
