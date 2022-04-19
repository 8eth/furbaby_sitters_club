import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        to="/logout"
        exact
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Logout
      </NavLink>
      
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
  )
}

export default NavBar