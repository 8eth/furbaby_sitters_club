// import React, {useState} from 'react'
// import {Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar'
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from 'date-fns/startOfWeek';
// import startOfDay from 'date-fns/startOfDay';
// import getDay from 'date-fns/getDay';
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import "react-datetime-picker/dist/DateTimePicker.css"
// import DatePicker from 'react-datepicker'
// import DateTimePicker from 'react-datetime-picker'
// import NavBar from './NavBar'
// import dateFns from 'react-big-calendar/lib/localizers/date-fns';
// import moment from 'moment'
// import AppointmentDetail from './AppointmentDetail';
// import "react-datepicker/dist/react-datepicker.css"

// const locales = {
//   "en-US": require("date-fns/locale/en-US")
// }

// const dateLocalizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// // const localizer = momentLocalizer(moment)

// function SitterCalendar({ logout, appointments}) {
//   const [newAppt, setNewAppt] = useState(new Date());
//   const [allAppointments, setAllAppointments] = useState(appointments)

//   console.log(appointments)

//   // function handleAddAppt(){
//   //   setAllAppointments([...allAppointments, newAppt])
//   // }

//   return (
//     <div className="background"> 
//       <NavBar logout={logout}/>
//       <br></br>
//       <br></br>
//       <br></br>
//       <h1>Calendar</h1>
//       <h2>Schedule New Appointment</h2>
//       <div>
//         <input type="text" style={{width: "20%", marginRight: "10px"}} 
//         value={newAppt.title} onChange={(e) => setNewAppt({...newAppt, title: e.target.value})}/>
//         {/* we're going to need to change this to appointment id instead of title?  */}
//         <DateTimePicker style= {{marginRight: "10px"}} selected={newAppt.appt_start} onChange={(appt_start)=> setNewAppt({...newAppt, appt_start})} />
//         <DateTimePicker style= {{marginRight: "10px"}} selected={newAppt.appt_end} onChange={(appt_end)=> setNewAppt({...newAppt, appt_end})} /> 
//         <button style={{marginTop: "10px"}} 
//         // onClick={handleAddAppt}
//         >Add Appointment</button>
//       </div>
//       <Calendar 
//         localizer={dateLocalizer}
//         events={appointments} 
//         startAccessor='start' 
//         endAccessor='end'
//         style={{height: 500, marginRight: "10px"}}
//         locales
//       />
//     </div>
//   )
// }

// export default SitterCalendar;


