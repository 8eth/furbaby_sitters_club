import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SitterDetail from './SitterDetail'
import { Header } from 'semantic-ui-react'
// import SitterCalendar from "./SitterCalendar"

function LandingPage({setIsAuthenticated, setUser}) {
  const [sitters, setSitters] = useState([])

  useEffect(() => {
    fetch("/sitters")
      .then((r) => r.json())
      .then(setSitters);
  }, []);

  const mappedSitters = sitters.map((sitter) => 
    <SitterDetail
      key={sitter.id}
      sitter={sitter}
    />
  )

  return (
    <div className="background"> 

      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
      
      <br></br>
      <h1 className="logo">Furbaby Sitters Club</h1>
      <div>We worry about your pet so you don't have to!</div>
      <h2>Meet the humans that will be taking care of your pets:</h2>
      <br></br>
      <div className="form-border ui center aligned five row grid container"> 
        {mappedSitters}
      </div>
      
    </div>
  )
}

export default LandingPage 