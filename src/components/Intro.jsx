import GradientText from './gradient/GradientText'
import React from "react";
import {BlurText} from "./blurText/Blurtext"


function Intro() {
  return (
    <div className="flex flex-col items-center gap-3 pb-10 pt-32 px-14 bg-blue-100 bg-gradient-to-br from-blue-100 to-blue-300">
      <p className="text-xl">Hi there! I am</p>
      <BlurText text="Amin Abdulkabir" className="text-4xl md:text-7xl font-lobster pb-14 text-primary-text" delay={100} />
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} // Custom gradient colors
        animationSpeed={5} // Custom animation speed in seconds
        showBorder={false} // Show or hide border
        className="text-lg sm:text-3xl" // Add one or more custom classes
      >
      Fullstack Developer.
      </GradientText>
      <p className='text-base sm:text-2xl'>Ever passionate and vibrant about combining frontends and backends to make ideas become reality</p>
      <div className="flex justify-evenly gap-10 mt-8">
        <a href="https://wa.me//+2348101101326" target="_blank"><button className="rounded h-12 w-28 bg-tertiary-purple bg-blue-700 text-white hover:bg-blue-500">Contact me</button></a>
        <a href="https://nimroddddd.github.io/Resume/" target='_blank'><button  className="border border-blue-700 hover:bg-blue-700 hover:text-white hover:border-0 h-12 w-28">Resume</button></a>
      </div>
    </div>
  )
}

export default Intro;