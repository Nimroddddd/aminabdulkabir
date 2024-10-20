import React from "react";
import ProjectData from "./ProjectData";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Projects() {

  function listProjects(project, index) {
    return (
      <div className="bg-cyan-300 w-72 sm:w-96 pb-5 hover:scale-110 duration-500" key={index}>
        <img src={project.image} className="h-60 mb-16"></img> 
        <div className="px-5">
          <p className="text-xl mb-8">{project.name}</p>
          <p>{project.description}</p>
          <div className="flex justify-between mt-8 text-base sm:text-xl">
            <a href={project.live} target="_blank"><button className=" h-10 w-20 sm:w-32 bg-blue-700 text-white hover:bg-blue-500">Live <ArrowOutwardIcon /></button></a>
            <a href={project.code} target="_blank"><button className="border border-blue-700 h-10 w-20 sm:w-32 hover:bg-blue-700 hover:text-white" >Code {project.github}</button></a>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div id="Projects" className="py-10 bg-gradient-to-bl from-cyan-200 to-blue-200">
      <h2 className="text-center text-2xl sm:text-5xl mb-10 font-caveat"><span className="underline">Pro</span>jects</h2>
      <div className="flex justify-center gap-24 lg:flex-row flex-col items-center">
        {ProjectData.map(listProjects)}
      </div>
    </div>
  )
}

export default Projects;