import React from 'react'

function SitterDetail({sitters}) {
   
    return (
      <div>
        <div className="center aligned cards">

          <div className='ui card'>
            <img src={sitters.image} alt="sitter"/>
            <h4>Name:{sitters.name}</h4>
            <h6>Bio:{sitters.bio}</h6>
            <h6>Email:{sitters.email}</h6>
            <h6>Phone:</h6>
          </div>

          <button className="ui submit button center" type="submit" 
          // onClick={() => handleClick(sitters)}
          >
            Schedule Appointment with `{sitters.name}`
          </button>

          <br></br>
          <br></br>
        </div>
      </div>
    );
  }

export default SitterDetail