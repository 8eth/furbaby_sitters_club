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

  // console.log(appointments)

  // const deleteAppt = (id) => {
  //   fetch(`/appointments/${id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(res => res.json())
  //   .then(deletedAppt => onDeletedAppt(deletedAppt))
      
  // };

  // const deleteAppt = (id) => {
  // // function handleDelete(id) {
  //   fetch(`/appointments/${id}`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setAppointments((appointment) =>
  //         appointments.filter((appointment) => appointment.id !== id)
  //       );
  //     }
  //   });
  // }

  // function onDeletedAppt(deletedAppt) {
  //   const updatedAppts = appointments.filter((appointment) => appointment !== deletedAppt)
  //   setAppointments(updatedAppts)
  // }

  

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
      <br></br>
      <br></br>
      <h3>Your Appointments</h3>
      <div className='ui center aligned grid container'>
        {mappedAppts}    
      </div>
    </div>
  );
}

export default AppointmentDetail