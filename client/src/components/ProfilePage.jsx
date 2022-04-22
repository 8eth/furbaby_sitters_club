import React, { useState, useEffect } from 'react'
import NavBar from "./NavBar"

function Profile({setUser, setIsAuthenticated}) {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch(`/clients`)
      .then((r) => r.json())
      .then(setProfile);
  }, []);
  // console.log(profile.username)

  const clientObj = profile.map((cli) => 
    <div className="center aligned cards">
      <div className='ui card'>
        <h4>{cli.fullname}</h4>
        <img src={cli.image} alt="Profile picture"/>
        <div>{cli.address}</div>
        <div>{cli.number}</div>
      </div>
    </div>

  )

  return (
    <div>
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
      <br></br>
      <br></br>
      <div className="ui center aligned grid container">
        {clientObj}
      </div>
    </div>
  )
}

export default Profile