import React from 'react'
import { Link } from 'react-router-dom'

function SitterDetail({ sitter }) {

  return (
    <div>
      <div className="center aligned cards">

        <div className='ui card'>
          <img src={sitter.image} alt="sitter"/>
          <h4>Name: {sitter.name}</h4>
          <h6>Bio: {sitter.bio}</h6>
          <h6>Email: {sitter.email}</h6>
          <h6>Phone: {sitter.phone_number}</h6>
        </div>

        <button className="ui submit button center" type="submit">
          <Link to="/calendar">Schedule Appointment with {sitter.name}</Link>
        </button>

        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default SitterDetail