// import React, {useState} from 'react'
// import {Calendar, momentLocalizer } from 'react-big-calendar'
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from 'date-fns/startOfWeek';
// import startOfDay from 'date-fns/startOfDay';
// import getDay from 'date-fns/getDay';
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import DatePicker from 'react-datepicker'
// import TimePicker from 'react-time-picker'
// import NavBar from './NavBar'
// import dateFns from 'react-big-calendar/lib/localizers/date-fns';
// import moment from 'moment'
// import AppointmentDetail from './AppointmentDetail';

// // const locales = {
// //   "en-US": require("date-fns/locale/en-US")
// // }

// // const dateLocalizer = dateFnsLocalizer({
// //   format,
// //   parse,
// //   startOfWeek,
// //   getDay,
// //   locales,
// // })

// // const localizer = momentLocalizer(moment)

// // const appointments = [
// //   {
// //     title: "Kitten",
// //     allDay: true,
// //     start: new Date("2022 04 06"),
// //     end: new Date("2022 04 07")
// //   },


// //   {
// //     title: "Pupper",
// //     start: new Date("2022 04 13"),
// //     end: new Date("2022 04 14")
// //   },

// //   {
// //     title: "Hamster",
// //     allDay: true,
// //     start: new Date("2022 04 20"),
// //     end: new Date("2022 04 25")
// //   }
// // ]


// function SitterCalendar({appointments, logout}) {
// const [newAppointment, setNewAppointment] = useState({title:"", start: "", end: ""})
//  const [allAppointments, setAllAppointments] = useState(appointments)



// // console.log(appointment)


//   return (
//     <div className="background"> 
//       <NavBar logout={logout}/>
//       <br></br>
//       <br></br>
//       <br></br>
//       <Calendar localizer={localizer}
//         events={allAppointments} 
//         startAccessor='start' 
//         endAccessor='end'
//         style={{height: 500, marginRight: "10px"}}
//       />
//     </div>
//   )
// }

// export default SitterCalendar;