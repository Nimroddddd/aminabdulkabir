import React from "react";
import Header from "./Header"
import Intro from "./Intro";
import Socials from "./Socials"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <div className="w-full bg-cyan-200 h-full pb-10 text-text-color">
      <Header />
      <Intro />
      <Socials />
      <About />
      <Skills />    
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App; 