import React from "react";
import Header from "./Header"
import Intro from "./Intro";
import Socials from "./Socials"
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <div className="w-full bg-blue-200 h-full text-text-color">
      <Header />
      <Intro />
      <Socials />
      <About />
      <Skills />    
    </div>
  )
}

export default App; 