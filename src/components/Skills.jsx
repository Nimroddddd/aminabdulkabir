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
      <div className="flex flex-col justify-center items-center py-6 border w-28 hover:scale-110 duration-500" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{color: mouseOn ? skill.color : "black", borderColor: mouseOn ? skill.color : "#fff"}}>
        {skill.icon}
        <p className="text-center mt-3">{skill.name}</p>
      </div>
    )
  }

  return (
    <div id="Skills">
      <h2 className="text-center text-5xl mb-10 font-caveat"><span className="underline">Sk</span>ills</h2>
      <p className="text-center text-2xl"><i>Frontend</i></p>
      <div className="flex flex-wrap justify-center mt-10 gap-8 mx-36">
        {frontend.map(displaySkills)}
      </div>
      <p className="text-center text-2xl mt-16 ml-16">Backend</p>
      <div className="flex flex-wrap justify-center mt-10 gap-8 mx-36">
        
        {backend.map(displaySkills)}
      </div>
      
    </div>
  )
}

export default Skills;