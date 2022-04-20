import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
// import Logout from "./components/Logout"
import SitterCalendar from "./components/SitterCalendar"
import AppointmentDetail from "./components/AppointmentDetail"

import PetPage from "./components/PetPage"

function App() {
  // const [clients, setClients] = useState([])
  // const [appointments, setAppointments] = useState([])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
  
      }
      else {
        console.log("We received errors...")
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

  function handleAddNewUser(newUser) {
    setUser([...user, newUser])
  }
  
  if (!isAuthenticated) return <LoginPage error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div className="background">
      <Switch>
      <Route exact path="/">
        <LandingPage logout={logout}/>
      </Route>
      <Route exact path="/calendar">
        <SitterCalendar logout={logout}/>
      </Route>
      <Route exact path="/appointmentdetails">
          <AppointmentDetail logout={logout}/>
      </Route>
      <Route path="/signup">
          <SignupPage onLogin={handleAddNewUser}/>
          {/* <SignupPage /> */}
      </Route>
      <Route path="/login">
          <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
      </Route>
      <Route path="/pets">
        <PetPage logout={logout}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;