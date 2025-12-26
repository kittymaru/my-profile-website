import { Routes, Route, useNavigate } from 'react-router-dom';

function SkillsPage() {
  return (
    <>
      <p className="text-3xl text-rose-900 font-bold font-mono mb-5">Skills</p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold">Programming Languages</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold">Frameworks and Libraries</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold">Developer Tools</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold">Databases</p>
        </div>
      </div>
    </>
  )
}

export default SkillsPage