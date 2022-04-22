import React, { useState, useEffect } from 'react'
import NavBar from "./NavBar"

function Profile({ setUser, setIsAuthenticated, user }) {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch(`/clients`)
      .then((r) => r.json())
      .then(setProfile);
  }, []);

  const clientObj = profile.map((user) => 
    <div className="center aligned cards" key={user.id}>
      <br></br>
      <div className='ui card'>
        <h4>{user.fullname}</h4>
        <img src={user.image} alt={user.fullname}/>
        <br></br>
        <div><b>Username:</b> <ins>{user.username}</ins></div>
        <div><b>Address:</b> {user.address}</div>
        <div><b>Phone Number:</b> {user.number}</div>
      </div>
    </div>

  )

  return (
    <div>
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user}/>
      <br></br>
      <br></br>
      <div className="ui center aligned grid container">
        {clientObj}
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Profile