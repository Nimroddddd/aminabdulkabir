import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Zoom } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Header() {

  const [active, setActive] = useState(false)
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 200 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  function handleActive() {
    setActive(prev => !prev)
  }

  function DropDownHeader() {
    return (
      <ul className="flex flex-col gap-10 mt-5 justify-center items-center text-2xl">
        <a href="#"><li onClick={handleActive}>Home</li></a>
        <a href="#About" onClick={handleActive}><li>About</li></a>
        <a href="#Skills" onClick={handleActive}><li>Skills</li></a>
        <a href="#Projects" onClick={handleActive}><li>Projects</li></a>
        <a href="#Contact" onClick={handleActive}><li>Contact</li></a>
      </ul>
    )
  }

  return !active ? (
    <header className={`bg-gradient-to-r from-blue-200 to-cyan-200 text-lg md:text-2xl flex items-center justify-between px-20 py-8 sticky inset-0 z-10 ${!top && `shadow-lg`}`}>
      <h2 className="font-bold">Amin</h2>
      <ul className="hidden sm:flex gap-5">
        <a href="#"><li>Home</li></a>
        <a href="#About"><li>About</li></a>
        <a href="#Skills"><li>Skills</li></a>
        <a href="#Projects"><li>Projects</li></a>
        <a href="#Contact"><li>Contact</li></a>
      </ul>
      <button className="sm:hidden" onClick={handleActive}><MenuIcon /></button>
    </header>
  ) :
  (
    <Zoom in={true}>
      <header className="bg-blue-300 text-2xl h-screen sticky inset-0 z-10">
        <div className="flex items-center justify-between px-20 py-8">
          <h2 className="text-lg">Amin</h2>
          <button className="" onClick={handleActive}>{!active ? <MenuIcon /> : <ExpandLessIcon />}</button>
        </div>
        <DropDownHeader />
      </header>
    </Zoom>
  )
}

export default Header;