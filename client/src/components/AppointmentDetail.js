import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import AppointmentCard from './AppointmentCard'


function AppointmentDetail({logout}) {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    getAppts()
  },[])

  const getAppts = () => {
    fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments);
  }

  const deleteAppt = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/appointments/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(deletedAppt => onDeletedAppt(deletedAppt))
      
  };

  const onDeletedAppt = (appointment) => {
    alert(`Appointment ${appointment.id} deleted`)
    getAppts();
  }


  const mappedAppts = appointments.map((appointment) => (
    <AppointmentCard
      key={appointment.id}
      appointment={appointment}
      deleteAppt={deleteAppt}
    /> 
  ))
  
  return (
    <div>
      <NavBar logout={logout}/>
      {mappedAppts}
    </div>
  );
}

export default AppointmentDetail