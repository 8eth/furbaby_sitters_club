import React from 'react'

function SitterDetail({sitters}) {
   
    return (
      <div>
        <div className="ui card">
          <img
            // id="main-images"
            id="thumbnail"
            src={sitters.image}
            alt="sitter"
          />
        </div>
        <div id="card-bottom">
          <h4>Name:{sitters.name}</h4>
          <h6>Bio:{sitters.bio}</h6>
          <h6>Email:{sitters.email}</h6>
          <h6>Phone:</h6>
          <div className="btn-div">
            <button id="schedule-btn" 
            // onClick={() => handleClick(sitters)}
            >
              Schedule Appointment with `{sitters.name}`
            </button>
          </div>
        </div>
      </div>
    );
  }

export default SitterDetail