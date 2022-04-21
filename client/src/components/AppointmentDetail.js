import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import AppointmentCard from './AppointmentCard'

function AppointmentDetail({setIsAuthenticated, setUser}) {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    getAppts()
  },[])

  const getAppts = () => {
    fetch(`/appointments`)

      .then((r) => r.json())
      .then(setAppointments);
  }

  const mappedAppts = appointments.map((appointment) => (
    <AppointmentCard
      key={appointment.id}
      appointment={appointment}
      appointments={appointments}
      setAppointments={setAppointments}
    /> 
  ))
  
  return (
    <div>
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
      <h3>Your Appointments</h3>
      <div className='ui center aligned grid container'>
        {mappedAppts}    
      </div>
    </div>
  );
}

export default AppointmentDetail