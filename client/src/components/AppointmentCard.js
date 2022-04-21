import React from 'react'
import AddEdit from "./AddEdit"

function AppointmentCard({appointments, setAppointments, appointment}) {
  const deleteAppt = (id) => {
  // function handleDelete(id) {
    fetch(`/appointments/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
      }
    });
  }

  return (
      
    <div className="center aligned cards">
      <br></br>
      
      <div className='ui card'>
        <h4>Start Date: {appointment.appt_start}</h4>
        <h4>End Date: {appointment.appt_end}</h4>
        <h4>Pet Care: {appointment.petcare}</h4>
          <button className="ui button" onClick={(e)=> deleteAppt(appointment.id)} >Cancel Appointment</button>
          <button className="ui button" >Edit Appointment Details</button>
      </div>
      <AddEdit
        appointment={appointment}  
        setAppointments={setAppointments}
      />
      <br></br>
    </div>
  )
}

export default AppointmentCard