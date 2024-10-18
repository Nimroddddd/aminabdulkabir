import React, { useEffect } from "react";

function Header() {


  return (
    <header className="bg-blue-300 text-lg md:text-2xl flex items-center justify-between px-20 py-8 shadow-lg sticky inset-0 z-10">
      <h2>Amin</h2>
      <ul className="hidden sm:flex gap-5">
        <a href="#"><li>Home</li></a>
        <a href="#About"><li>About</li></a>
        <a href="#Skills"><li>Skills</li></a>
        <a><li>Projects</li></a>
        <a><li>Contact</li></a>
      </ul>
    </header>
  )
}

export default Header;