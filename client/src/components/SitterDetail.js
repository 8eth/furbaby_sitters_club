import React from 'react'

function SitterDetail({sitter}) {
   
    return (
      <div>
        <div className="center aligned cards">

          <div className='ui card'>
            <img src={sitter.image} alt="sitter"/>
            <h4>Name:{sitter.name}</h4>
            <h6>Bio:{sitter.bio}</h6>
            <h6>Email:{sitter.email}</h6>
            <h6>Phone:</h6>
          </div>

          <button className="ui submit button center" type="submit" 
          // onClick={() => handleClick(sitters)}
          >
            Schedule Appointment with `{sitter.name}`
          </button>

          <br></br>
          <br></br>
        </div>
      </div>
    );
  }

export default SitterDetail