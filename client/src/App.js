import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import Logout from "./components/Logout"
import SitterCalendar from "./components/SitterCalendar"
import AppointmentDetail from "./components/AppointmentDetail"

import PetPage from "./components/PetPage"

function App() {
  const [sitters, setSitters] = useState([])
  // const [clients, setClients] = useState([])
  const [appointments, setAppointments] = useState([])
  const [pets, setPets] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // console.log(setIsAuthenticated)
  
  useEffect(() => {
    fetch('/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          console.log(user)
          
          fetch("/sitters")
          .then((res) => res.json())
          .then(setSitters);

          fetch("/appointments")
          .then((res) => res.json())
          .then(setAppointments);

          fetch("/pets")
          .then((res) => res.json())
          .then(setPets);
        });
      }
      else {
        console.log("we recieved errors")
      }
    
    });
  },[]);

  const logout = () => { 
    console.log("running")
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
  }

  // console.log(sitters)
  // console.log(appointments)

//   
// const mappedAppts = appointments.map((appointment) => (
//       <AppointmentDetail
//         key={appointment.id}
//         appointment={appointment}
//       />
//     ))
//   console.log(mappedAppts)

// function handleAddAppointment(){
//   setAllAppointments([...allAppointments, newAppointment])
  
//   }

  // useEffect(() => {
  //   fetch(baseUrl + "/pets")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  if (!isAuthenticated) return <LoginPage error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;


  return (
    <div className="background">
      <Switch>
      <Route exact path="/">
        <LandingPage sitters={sitters} logout={logout}/>
      </Route>
      {/* <Route exact path="/calendar">
        <SitterCalendar appointment={appointments} logout={logout}/>
      </Route> */}
      <Route exact path="/appointmentdetails">
          <AppointmentDetail appointments={appointments} logout={logout}/>
      </Route>
      <Route path="/signup">
          <SignupPage />
      </Route>
      <Route path="/login">
          <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
      </Route>
      <Route path="/pets">
        <PetPage pets={pets}/>
      </Route>
      </Switch>
    </div>
  );
}


export default App;