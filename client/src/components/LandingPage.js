import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SitterDetail from './SitterDetail'


function LandingPage({sitters}) {
  const [sits, setSits] = useState("")

    useEffect(() => {
    fetch("http://localhost:3000/sitters")
      .then((res) => res.json())
      .then(setSits);
  }, []);
  console.log("landing Page:", sits)
  return (
    <div>

      <NavBar/>
      <h1>Welcome to Furbaby Sitters Club!!!</h1>
      <div>We worry about your furbaby so you don't have to!</div>
      <h2>Sitters:</h2>
      <div> 
      <SitterDetail sitters={sitters}/>
      </div>
    </div>
  )
}

export default LandingPage