import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Zoom } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Header() {

  const [active, setActive] = useState(false)
  const [top, setTop] = useState(true);
  const headerItems = [
    {
      id: "home",
      text: "Home"
    },
    {
      id: "about",
      text: "About"
    },
    {
      id: "skills",
      text: "Skills"
    },
    {
      id: "projects",
      text: "Projects"
    },
    {
      id: "contact",
      text: "Contacts"
    },
  ]

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
    console.log(e.target.id)
    const { id } = e.target;
    e.preventDefault()
    const target = id.slice(0,1).toUpperCase() + id.slice(1);
    const element = document.getElementById(`${target}`);
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }

  function DropDownHeader() {
    return (
      <ul className="flex flex-col gap-10 mt-5 justify-center items-center text-4xl font-extrabold">
        {headerItems.map(item => <li id={item.id} onClick={handleActive}>{item.text}</li>)}
      </ul>
    )
  }

  return !active ? (
    <header className={`bg-gradient-to-r from-blue-200 to-cyan-200 text-lg md:text-2xl flex items-center justify-between px-20 py-8 sticky inset-0 z-10 ${!top && `shadow-lg`}`}>
      <h2 className="font-extrabold">Amin</h2>
      <ul className="hidden sm:flex gap-10">
        {headerItems.map(item => <li className="cursor-pointer hover:text-blue-500 transition-colors" id={item.id} onClick={handleSectionClick}>{item.text}</li>)}
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