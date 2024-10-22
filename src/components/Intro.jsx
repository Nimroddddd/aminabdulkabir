import GradientText from './gradient/GradientText'
import React from "react";
import {BlurText} from "./blurText/Blurtext"


function Intro() {
  return (
    <div className="flex flex-col items-center gap-3 pb-10 pt-32 px-14 bg-blue-100 bg-gradient-to-br from-blue-200 to-cyan-200">
      <p className="text-xl sm:text-2xl font-bold">Hello there! I am</p>
      <BlurText text="Amin Abdulkabir" className="text-4xl md:text-7xl font-lobster pb-14 text-primary-text" delay={100} />
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} // Custom gradient colors
        animationSpeed={5} // Custom animation speed in seconds
        showBorder={false} // Show or hide border
        className="text-lg sm:text-3xl" // Add one or more custom classes
      >
      Fullstack Developer.
      </GradientText>
      <p className='text-base sm:text-2xl'>Ever passionate and vibrant about combining frontends and backends to transform raw ideas into reality.</p>
      <div className="flex justify-evenly gap-10 mt-8">
        <a href="#Contact"><button className="rounded h-12 w-28 bg-tertiary-purple bg-blue-700 text-white hover:bg-blue-400 duration-300">Contact me</button></a>
        <a href="https://docs.google.com/document/d/1_7DEIDy1SmDHkb51i6HGL-L6azjDftasfxDgGTtPrfk/edit?usp=sharing" target='_blank'><button  className="border-2 border-blue-700 hover:bg-blue-700 hover:text-white hover:border-2 h-12 w-28 duration-300 rounded">Resume</button></a>
      </div>
    </div>
  )
}

export default Intro;