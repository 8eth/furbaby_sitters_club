import React from 'react'
import NavBar from "./NavBar"
import PetDetail from "./PetDetail"

function PetPage({pets, logout}) {
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