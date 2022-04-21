import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import AppointmentCard from './AppointmentCard'


function AppointmentDetail({setIsAuthenticated, setUser}) {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    getAppts()
  },[])

  const getAppts = () => {
    fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments);
  }

  const deleteAppt = (id) => {
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

  // function handleDeleteBook(deletedBook) {
  //   const updatedBooks = books.filter((book) => book !== deletedBook)
  //   setBooks(updatedBooks)
  // }


  const mappedAppts = appointments.map((appointment) => (
    <AppointmentCard
      key={appointment.id}
      appointment={appointment}
      deleteAppt={deleteAppt}
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