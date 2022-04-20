import React, { useState, useEffect } from 'react'
import NavBar from "./NavBar"
import PetDetail from "./PetDetail"

function PetPage({logout}) {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);

    const petObj = pets.map((pet) => 
     <PetDetail 
     key={pet.id}
     pet={pet}
     />
    )
  return (
    <div>
        <NavBar logout={logout}/>
        <h2>Pets:</h2>
        <br></br>
        <div className="form-border ui center aligned five row grid container">{petObj}</div>
    </div>
  )
}

export default PetPage