import { Routes, Route, useNavigate } from 'react-router-dom';

function ExperiencePage() {
  return (
    <div className="flex items-stretch items-center justify-center">
      <div className="w-[600px] p-6 mr-5">
        <p className="text-xl text-rose-900 font-bold font-mono mb-5">Work Experience</p>

        <p className="text-lg text-rose-900 underline font-mono">JB Education</p>
        <p className="text-sm text-rose-900 italic font-mono mb-2">Academic Tutor, July. 2024 – Present</p>

        <li className="text-sm text-rose-900 font-mono mb-2">Conducted one-on-one tutoring for Year 7-12 students in Maths, Science, HSC Chemistry and HSC Physics.</li>
        <li className="text-sm text-rose-900 font-mono mb-2">Prepared personalised weekly lesson content and homework for each student.</li>
        <li className="text-sm text-rose-900 font-mono mb-2">Assisted students with homework, exam preparation and assignments.</li>
      </div>

      <div className="w-[3px] h-[550px] bg-rose-900"/>

      <div className="w-[600px] p-6 ml-5">
        <p className="text-xl text-rose-900 font-bold font-mono mb-5">Volunteering</p>
        <p className="text-lg text-rose-900 underline font-mono">AnimeUNSW</p>
        <p className="text-sm text-rose-900 italic font-mono mb-2">Marketing Executive, Sep. 2025 – Present</p>
        <li className="text-sm text-rose-900 font-mono mb-5">Oversaw marketing operations, including posting and creation of promotional materials and social media account management.</li>

        <p className="text-sm text-rose-900 italic font-mono mb-2">Marketing Subcommittee, Mar. 2025 – Sep. 2025</p>
        <li className="text-sm text-rose-900 font-mono mb-2">Created promotional materials for AUNSW events and sponsors.</li>
        <li className="text-sm text-rose-900 font-mono mb-5">Operated society Rednote account, including translating posts into Chinese and answering questions regarding events and memberships (shortlisted for 2025 Arc Clubs Community Outstanding New Initiative Award)</li>

        <p className="text-lg text-rose-900 underline font-mono">UNSW Nintendo Society</p>
        <p className="text-sm text-rose-900 italic font-mono mb-2">Events Director, Mar. 2025 – Dec. 2025</p>
        <li className="text-sm text-rose-900 font-mono mb-2">Organised society events including weekly meetups, trivia and gaming tournaments.</li>
        <li className="text-sm text-rose-900 font-mono mb-2">Represented society at large-scale uni-wide events such as O-Week, HobbyCon and Games Galore.</li>
        <li className="text-sm text-rose-900 font-mono mb-2">Won 2025 Arc New Club Award.</li>

      </div>
    </div>
  )
}

export default ExperiencePage