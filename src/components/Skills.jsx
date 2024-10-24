import React, { useState } from "react";
import SkillData from "./SkillData";

function Skills() {

  const [frontend, backend] = SkillData;

  function displaySkills(skill, index) {

    const [mouseOn, setMouseOn] = useState(false)

    function handleMouseOver() {
      setMouseOn(true)
    }

    function handleMouseLeave() {
      setMouseOn(false)
    }

    return(
      <div key={index} className="flex flex-col justify-center items-center py-2 px-1 md:py-6 w-20 md:w-28 md:h-36 hover:scale-110 duration-500 shadow-xl" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{color: mouseOn ? skill.color : "black", borderColor: mouseOn ? skill.color : "#fff"}}>
        {skill.icon}
        <p className="text-center text-sm mt-3">{skill.name}</p>
      </div>
    )
  }

  return (
    <div id="Skills" className="px-10 md:px-36 py-24 bg-gradient-to-br from-blue-200 to-cyan-200">
      <h2 className="text-center text-2xl sm:text-5xl mb-10 font-caveat"><span className="underline">Sk</span>ills</h2>
      <p className="text-center text-xl sm:text-2xl underline"><i>Frontend</i></p>
      <div className="flex flex-wrap justify-center mt-10 gap-8 lg:px-40 xl:px-56">
        {frontend.map(displaySkills)}
      </div>
      <p className="text-center text-xl sm:text-2xl mt-16 underline"><i>Backend</i></p>
      <div className="flex flex-wrap justify-center mt-10 gap-8 lg:px-40 xl:px-56">
        {backend.map(displaySkills)}
      </div>
      
    </div>
  )
}

export default Skills;