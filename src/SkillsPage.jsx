import { Routes, Route, useNavigate } from 'react-router-dom';

function SkillsPage() {
  return (
    <>
      <p className="text-3xl text-rose-900 font-bold font-mono mb-5">Skills</p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold mb-2">Programming Languages</p>
          <p>C, Java, Shell, JavaScript, TypeScript, Python, HTML, CSS</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold mb-2">Frameworks and Libraries</p>
          <p>React, TailwindCSS, Express.js, Jest.js, Node.js</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold mb-2">Developer Tools</p>
          <p>Git, VSCode</p>
        </div>
        <div className="rounded-2xl p-6 bg-white shadow-md hover:scale-120 transition-transform duration-200 font-mono">
          <p className="font-bold mb-2">Databases</p>
        </div>
      </div>
    </>
  )
}

export default SkillsPage