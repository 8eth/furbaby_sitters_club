import React, { useState, useEffect } from 'react'
import {Calendar, momentLocalizer, dateFnsLocalizer, TimeGrid } from 'react-big-calendar'
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datetime-picker/dist/DateTimePicker.css"
import NavBar from './NavBar'
import dateFns from 'react-big-calendar/lib/localizers/date-fns';
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
import AddAppointment from './AddAppointment';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const dateLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const localizer = momentLocalizer(moment)

function SitterCalendar({ setIsAuthenticated, setUser, user }) {

  const [appointments, setAppointments] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  
  useEffect(() => {
      fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments)
  }, [])

  function handleCreateForm(e, showCreateForm){
    e.stopPropagation()
    setShowCreateForm(!showCreateForm)
  }

  return (
    <div className="background"> 
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user}/>
      <h1>Calendar</h1>
      <button className='ui button' onClick={(e)=> handleCreateForm(e, showCreateForm)}>Create Appointment</button>
     
      {showCreateForm && <AddAppointment appointments={appointments} setAppointments={setAppointments}/>}
   
      <Calendar 
        localizer={localizer}
        events={appointments} 
        startAccessor="appt_start" 
        endAccessor="appt_end"
        style={{height: 500, margin: "50px"}}
        locales
      />
    </div>
  )
}

export default SitterCalendar;





