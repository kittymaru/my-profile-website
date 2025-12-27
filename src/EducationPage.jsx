import { Routes, Route, useNavigate } from 'react-router-dom';

function EducationPage() {
  return (
    <>
      <p className="text-3xl text-rose-900 font-bold font-mono mb-5">Education</p>

      <p className="text-lg text-rose-900 font-bold font-mono mb-2">University of New South Wales</p>
      <p className="text-sm text-rose-900 italic font-mono mb-2">Bachelor of Science (Computer Science), 2024 - Present</p>
      <p className="text-sm text-rose-900 italic font-mono mb-5">Expected graduation: 2027</p>
      <p className="text-rose-900 font-mono mb-2"><b>WAM:</b> 80.25</p>
      <p className="text-rose-900 font-mono mb-2"><b>Relevant coursework:</b> Data Structures and Algorithms, Object-Oriented Programming, Web Front-End Programming</p>
    </>
  )
}

export default EducationPage