import React from 'react'

function PetDetail({ pet }) {
  return (
    <div>
      <div className="center aligned cards">

        <div className='ui card'>
          <img src={pet.image} alt="sitter"/>
          <h4>Name: {pet.name}</h4>
          <h5>Species: {pet.species}</h5>
          <h5>Meds: {pet.meds}</h5>
          <h5>Likes: {pet.likes}</h5>
          <h5>Fears: {pet.fears}</h5>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default PetDetail