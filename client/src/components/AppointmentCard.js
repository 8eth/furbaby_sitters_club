import React, {useState} from 'react'
import AddEdit from "./AddEdit"

function AppointmentCard({appointments, setAppointments, appointment}) {

  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  const deleteAppt = (id) => {
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
        {/* <h3>{appointment.clients.pets.name}</h3>
        <img src={appointment.clients.pets.image}/> */}
        <h3>{appointment.title}</h3>
        <h4>Appt Date: "{appointment.appt_start} - {appointment.appt_end}"</h4>
        <h4>Pet Care: {appointment.petcare}</h4>
        <h4>Sitter Name: {appointment.sitter.name}</h4>
        <img src={appointment.sitter.image}/>
        <h4>Sitter Phone: {appointment.sitter.phone_number}</h4>
          <button className="ui button" onClick={(e) => handleEditForm(e, showEditForm)}>Edit Appointment Details</button>
          <button className="ui red basic button" onClick={(e)=> deleteAppt(appointment.id)} >Cancel Appointment</button>
      </div>
      {showEditForm && <AddEdit appointment={appointment} setAppointments={setAppointments}/>}
      <br></br>
    </div>
  )
}

export default AppointmentCard