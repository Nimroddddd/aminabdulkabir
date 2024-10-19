import React, { useState } from "react";
import TextField from '@mui/material/TextField';


function Contact() {

  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: ""
  })

  emailjs.init({
    publicKey: "EyRqBxz1TukRBebUu",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target
    console.log(form)
    try {
      await emailjs.sendForm("gmail_service", "gmail_template", form)
      alert("Success!")
    } catch(err) {
      alert(err)
    }
  }

  function handleChange(e) {
    const {name, value} = e.target
    setDetails(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return(
    <div className="flex flex-col items-center py-14">
      <h2 className="text-center text-2xl sm:text-5xl mb-10 font-caveat"><span className="underline">Cont</span>act me</h2>
      <p className="w-64 sm:w-96 text-lg mb-8">Fill in the form below to reach out to me for prompt response.</p>
      <form className="flex flex-col gap-5 w-64 sm:w-96" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={details.name} onChange={handleChange} />
      <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={details.email} onChange={handleChange} />
      <TextField
          id="outlined-textarea"
          label="Message"
          placeholder="Placeholder"
          multiline
          rows={10}
          name="message"
          value={details.message}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-900 text-white text-2xl py-3 hover:bg-blue-500">Send Message</button>
      </form>
    </div>
  )
}

export default Contact;