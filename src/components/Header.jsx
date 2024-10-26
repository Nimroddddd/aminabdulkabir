import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Zoom } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Header() {

  const [active, setActive] = useState(false)
  const [headerActive, setHeaderActive] = useState(true)
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 200 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  function handleActive(e) {
    setActive(prev => !prev)
    setTimeout(() => {handleSectionClick(e)}, 0)

  }

  function handleSectionClick(e) {
    e.preventDefault()
    const {id} = e.target;
    const target = id.slice(0,1).toUpperCase() + id.slice(1);
    const element = document.getElementById(`${target}`);
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }

  function DropDownHeader() {
    return (
      <ul className="flex flex-col gap-10 mt-5 justify-center items-center text-4xl font-extrabold">
        <a ><li onClick={handleActive} id="home">Home</li></a>
        <a ><li onClick={handleActive} id="about">About</li></a>
        <a ><li onClick={handleActive} id="skills">Skills</li></a>
        <a ><li onClick={handleActive} id="projects">Projects</li></a>
        <a ><li onClick={handleActive} id="contact">Contact</li></a>
      </ul>
    )
  }

  return !active ? (
    <header className={`bg-gradient-to-r from-blue-200 to-cyan-200 text-lg md:text-2xl flex items-center justify-between px-20 py-8 sticky inset-0 z-10 ${!top && `shadow-lg`}`}>
      <h2 className="font-extrabold">Amin</h2>
      <ul className="hidden sm:flex gap-5">
        <a href=""><li id="home" onClick={handleSectionClick}>Home</li></a>
        <a href=""><li id="about" onClick={handleSectionClick}>About</li></a>
        <a href=""><li id="skills" onClick={handleSectionClick}>Skills</li></a>
        <a href=""><li id="projects" onClick={handleSectionClick}>Projects</li></a>
        <a href=""><li id="contact" onClick={handleSectionClick}>Contact</li></a>
      </ul>
      <button className="sm:hidden" onClick={handleActive}><MenuIcon /></button>
    </header>
  ) :
  (
    <Zoom in={true}>
      <header className={`bg-blue-300 text-2xl sticky inset-0 z-10 ${active ? `h-screen` : `h-0`}`}>
        <div className="flex items-center justify-between px-20 py-8">
          <h2 className="text-lg font-extrabold">Amin</h2>
          <button className="" onClick={handleActive}><ExpandLessIcon /></button>
        </div>
        <DropDownHeader />
      </header>
    </Zoom>
  )
}

export default Header;