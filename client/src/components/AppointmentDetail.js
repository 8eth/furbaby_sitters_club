import React from 'react'
import NavBar from './NavBar'


function AppointmentDetail({logout, apps}) {

  console.log(apps)


  return (
    <div>

      <NavBar logout={logout}/>
      Appointment Detail


    </div>
  )
}

export default AppointmentDetail