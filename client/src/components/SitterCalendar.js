import React, {useState, useEffect} from 'react'
import {Calendar, momentLocalizer, dateFnsLocalizer, TimeGrid } from 'react-big-calendar'
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import startOfDay from 'date-fns/startOfDay';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datetime-picker/dist/DateTimePicker.css"
import DatePicker from 'react-datepicker'
import DateTimePicker from 'react-datetime-picker'
import NavBar from './NavBar'
import dateFns from 'react-big-calendar/lib/localizers/date-fns';
import moment from 'moment'
import AppointmentDetail from './AppointmentDetail';
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

const appts = [

  {
    title: "Kitten",
    start: new Date(2021, 4, 22),
    end: new Date(2021, 4, 30)
  
  }
]
const localizer = momentLocalizer(moment)

function SitterCalendar({ setIsAuthenticated, setUser }) {

  const [appointments, setAppointments] = useState([])
  // const [allAppointments, setAllAppointments] = useState(appointments)
  
  useEffect(() => {
      fetch("/appointments")
      .then((r) => r.json())
      .then(setAppointments)
  }, [])

  // console.log(appointments)

  return (
    <div className="background"> 
      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
      <h1>Calendar</h1>
      <h2>Schedule New Appointment</h2>
      <AddAppointment appointments={appointments} setAppointments={setAppointments}/>
   
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





