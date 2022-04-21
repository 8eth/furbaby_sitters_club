import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({setIsAuthenticated, setUser}) {
  // console.log("auth:", setIsAuthenticated)
  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
  }
  return ( 
      <div>
      <NavLink
        to="/"
        onClick={()=>logout()}
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
          color: "#5a5a5a",
        }}
      >
        Logout
      </NavLink>

      <NavLink
        to="/pets"
        exact
        className="ui right floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Pets
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