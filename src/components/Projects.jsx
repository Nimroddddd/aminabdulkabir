import React from "react";
import ProjectData from "./ProjectData";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Projects() {

  function listTools(tool, index) {
    return (
      <div key={index}>
        <p className="text-white py-1 px-2 rounded text-sm sm:text-base" style={{backgroundColor: "#3c4248"}} >{tool}</p>
      </div>
    )
  }

  function listProjects(project, index) {
    return (
      <div className="w-72 sm:w-96 pb-5 hover:scale-110 duration-500 shadow-2xl rounded" key={index}>
        <img src={project.image} className="h-60 mb-16"></img> 
        <div className="px-5">
          <p className="text-xl mb-4 font-bold">{project.name}</p>
          <p className="mb-7 h-32 sm:h-20">{project.description}</p>
          <div className="flex flex-wrap gap-3 h-22">
            {project.tools.map(listTools)}
          </div>
          <div className="flex justify-between mt-8 text-base sm:text-xl">
            <a href={project.live} target="_blank"><button className=" h-10 w-24 sm:w-32 bg-blue-200 hover:bg-blue-300 rounded duration-300">Live <ArrowOutwardIcon /></button></a>
            {project.code && <a href={project.code} target="_blank"><button className="border-2 border-blue-200 h-10 w-24 sm:w-32 hover:bg-blue-200 duration-300" >Code {project.github}</button></a>}
          </div>
        </div>
      </div>
    )
  }

  return(
    <div id="Projects" className="py-24 bg-gradient-to-bl from-cyan-200 to-blue-200">
      <h2 className="text-center text-2xl sm:text-5xl mb-10 font-caveat"><span className="underline">Pro</span>jects</h2>
      <div className="flex justify-center gap-24 lg:flex-row flex-col items-center flex-wrap lg:px-28">
        {ProjectData.map(listProjects)}
      </div>
    </div>
  )
}

export default Projects;