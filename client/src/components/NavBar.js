import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>NavBar
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
            to="/sitterDetail"
            exact
            className="ui right floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}
        >
          Sitter Detail
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