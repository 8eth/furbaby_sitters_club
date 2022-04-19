import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SitterDetail from './SitterDetail'


function LandingPage({sitters}) {
  // const mappedSitters = sitters.map((sitter) => 
  //   <SitterDetail
  //     key={sitter.id}
  //     sitter={sitter}
  //   />
  // )

  return (
    <div className="background"> 

      <NavBar/>
      <br></br>
      <h1>Welcome to Furbaby Sitters Club!!!</h1>
      <div>We worry about your furbaby so you don't have to!</div>
      <h2>Sitters:</h2>
      <div className="form-border ui center aligned five row grid container"> 
        {/* {mappedSitters} */}
        {/* <SitterDetail 
          sitters={sitters}
        /> */}
      </div>
    </div>
  )
}

export default LandingPage 





// const [sits, setSits] = useState("")

  //   useEffect(() => {
  //   fetch("http://localhost:3000/sitters")
  //     .then((res) => res.json())
  //     .then(setSits);
  // }, []);
  //console.log("landing Page:", sits)