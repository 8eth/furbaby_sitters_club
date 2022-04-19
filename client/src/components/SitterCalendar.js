// import React, {useState} from 'react'
// import {Calendar, momentLocalizer } from 'react-big-calendar'
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from 'date-fns/startOfWeek';
// import startOfDay from 'date-fns/startOfDay';
// import getDay from 'date-fns/getDay';
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import DatePicker from 'react-datepicker'
// import TimePicker from 'react-timepicker'
// import NavBar from './NavBar'
// import dateFns from 'react-big-calendar/lib/localizers/date-fns';
// import moment from 'moment'

// const locales = {
//   "en-US": require("dateFns/locales/en-US")
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// const localizer = momentLocalizer(moment)

// const appointments = [
//   {
//     title: "Kitten",
//     allDay: true,
//     start: new Date(2022, 4, 6),
//     end: new Date(2022, 4, 7)
//   },


//   {
//     title: "Pupper",
//     start: new Date(2022, 4, 13),
//     end: new Date(2022, 4, 14)
//   },

//   {
//     title: "Hamster",
//     allDay: true,
//     start: new Date(2022, 4, 20),
//     end: new Date(2022, 4, 25)
//   }
// ]


// function SitterCalendar() {
// const [newAppointment, setNewAppointment] = useState({title:"", start: "", end: ""})
// const [allAppointments, setAllAppointments] = useState(events)

// function handleAddAppointment(){
// setAllAppointments([...allAppointments, newAppointment])

// }
//   return (
//     <div className="background"> 
//       <NavBar/>
//       <br></br>
//       <br></br>
//       <br></br>
//       <Calendar localizer={localizer}
//       events={allAppointments} 
//       startAccessor='start' 
//       endAccessor='end'
//       style={{height: 500, marginRight: "10px"}}/>
//     </div>
//   )
// }

// export default SitterCalendar;