import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import Logout from "./components/Logout"
import SitterCalendar from "./components/SitterCalendar"
import AppointmentDetail from "./components/AppointmentDetail"

function App() {
  const [sitters, setSitters] = useState([])
  // const [clients, setClients] = useState([])
  const [appointments, setAppointments] = useState([])
  // const [pets, setPets] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const baseUrl = "http://localhost:3000"
  console.log("app:", isAuthenticated)
  
  useEffect(() => {
    fetch(baseUrl + '/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          console.log(user)
          
          fetch(baseUrl + "/sitters")
          .then((res) => res.json())
          .then(setSitters);

          fetch(baseUrl + "/appointments")
          .then((res) => res.json())
          .then(setAppointments);
        });
      }
      else {
        console.log("we recieved errors")
      }
    
    });
  },[]);

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
}


  // useEffect(() => {
  //   fetch(baseUrl + "/clients")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  // useEffect(() => {
  //   fetch(baseUrl + "/appointments")
  //     .then((res) => res.json())
  //     .then(setAppointments);
  // }, []);

  // useEffect(() => {
  //   fetch(baseUrl + "/pets")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  if (!isAuthenticated) return <LoginPage error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  
  // console.log("app sitters:", sitters)

  return (
    <div className="background">
      <Switch>
      <Route exact path="/">
        <LandingPage sitters={sitters}/>
      </Route>
      <Route exact path="/calendar">
        <SitterCalendar />
      </Route>
      <Route exact path="/appointmentdetails">
          <AppointmentDetail />
      </Route>
      <Route path="/signup">
          <SignupPage />
      </Route>
      <Route path="/login">
          <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
      </Route>
      <Route path="/logout">
          <Logout logout={logout}/>
      </Route>
      </Switch>
    </div>
  );
}


export default App;