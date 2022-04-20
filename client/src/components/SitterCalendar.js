import React, {useState} from 'react'
import {Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar'
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

function SitterCalendar({ logout, appointments}) {
  const [newAppt, setNewAppt] = useState(new Date());
  const [allAppointments, setAllAppointments] = useState(appointments)

  console.log(appointments)

  function handleAddAppt(){
    setAllAppointments([...allAppointments, newAppt])
  }

  // const mappedAppts = appointments.map((appointment) => (
  //   <AppointmentDetail
  //     key={appointment.id}
  //     apps={appointment}
  //   />
  // ))

  return (
    <div className="background"> 
      <NavBar logout={logout}/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Calendar</h1>
      <h2>Schedule New Appointment</h2>
      <div>
        <input type="text" style={{width: "20%", marginRight: "10px"}} 
        value={newAppt.title} onChange={(e) => setNewAppt({...newAppt, title: e.target.value})}/>
        {/* we're going to need to change this to appointment id instead of title?  */}
        <DateTimePicker style= {{marginRight: "10px"}} selected={newAppt.datetime} onChange={(datetime)=> setNewAppt({...newAppt, datetime})} />
        {/* <DateTimePicker style= {{marginRight: "10px"}} selected={newAppt.end} onChange={(end)=> setNewAppt({...newAppt, end})} value={newAppt} />  */}
        <button style={{marginTop: "10px"}} onClick={handleAddAppt}>Add Appointment</button>
      </div>
      <Calendar 
        localizer={localizer}
        events={appointments} 
        startAccessor='start' 
        endAccessor='end'
        style={{height: 500, marginRight: "10px"}}
      />
    </div>
  )
}

export default SitterCalendar;

// function SitterCalendar({appointments}){
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);

//   const handleCheckInDate = (date) => {
//     setCheckInDate(date);
//     setCheckOutDate(null);
//   };

//   const handleCheckOutDate = (date) => {
//     setCheckOutDate(date);
//   };

//   return (
//     <div className="App">
//       <div className="input-container">
//         <div>
//           <label>Check-in</label>
//           <DateTimePicker
//             selected={checkInDate}
//             minDate={new Date()}
//             onChange={handleCheckInDate}
//           />
//         </div>
//         <div>
//           <label>Check-out</label>
//           <DateTimePicker
//             selected={checkOutDate}
//             minDate={checkInDate}
//             onChange={handleCheckOutDate}
//           />
//         </div>
//       </div>
//       {checkInDate && checkOutDate && (
//         <div className="summary">
//           <p>
//             You book a hotel from {moment(checkInDate).format("LL")} to{" "}
//             {moment(checkOutDate).format("LL")}.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
  
//  export default SitterCalendar


{/* // const appointments = [
//   { */}
//     title: "Kitten",
//     allDay: true,
//     start: new Date("2022 04 06"),
//     end: new Date("2022 04 07")
//   }