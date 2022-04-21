import React from 'react'
import AddEdit from "./AddEdit"

function AppointmentCard({appointment, deleteAppt}) {

  return (
      
    <div className="center aligned cards">
      <br></br>
      
      <div className='ui card'>
        <h4>Start Date: {appointment.appt_start}</h4>
        <h4>End Date: {appointment.appt_end}</h4>
        <h4>Pet Care: {appointment.petcare}</h4>
          <button className="ui button" onClick={(e)=> deleteAppt(e.appointment_id)} >Cancel Appointment</button>
          <button className="ui button" >Edit Appointment Details</button>
      </div>
      <AddEdit
        appointment={appointment}  
      />
      <br></br>
    </div>
  )
}

export default AppointmentCard