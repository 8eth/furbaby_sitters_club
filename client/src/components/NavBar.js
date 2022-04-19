import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ logout }) {
  return (
    <span>
      
      <div>
      {/* <NavLink
        to="/"
        exact
        onClick={console.log("Click")}
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Logout
      </NavLink> */}
      
      <NavLink
        to="/appointmentdetails"
        exact
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Appointment Detail
      </NavLink>

      <NavLink
        to="/calendar"
        exact
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Calendar
      </NavLink>

      <NavLink
        to="/"
        exact
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Home
      </NavLink>
            
      </div>
      <button onClick={console.log("Logout Clicked")}>
        Logout
      </button>
    </span>
    
  )
}

export default NavBar