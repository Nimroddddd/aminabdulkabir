import React from "react";

function About() {
  return (
    <div className="px-14 sm:px-24 md:px-36 py-24 text-lg bg-gradient-to-bl from-cyan-200 to-blue-200" id="About">
      <h2 className="text-center text-2xl sm:text-5xl mb-10 font-caveat"><span className="underline">Abo</span>ut me</h2>
      <p>My name is Amin Abdulkabir, and I am a devoted full-stack developer with a passion for crafting scalable, 
        user-centric solutions. With years of experience in the industry, I've honed my skills in various 
        programming languages such as Javascript, python and a few other notable languages and frameworks.
      </p>
      <br />
      <p>Throughout my career, I have dedicated a reasonable quantity of time towards self development, and thus, have reached a
        point whereby I believe my expertise would be one of a kind in this dynamic yet broad industry. 
      </p>
      < br />
      <p>
        I have 2 years of hands-on experience in building projects, having provided quality frontend and backend for various projects 
        and worked with several clients. find attached, the link to my resume for more in-depth reference
      </p>
      <br />
      <a href="https://docs.google.com/document/d/1n4PC69suakP8NpI9fdsbBN06EU3uvBilCmt-78xaYVQ/edit" target="_blank" rel="noopener noreferrer" ><button  className="bg-blue-400 text-black font-semibold h-12 w-28 rounded shadow-2xl">Resume</button></a>

    </div>
  )
}

export default About;