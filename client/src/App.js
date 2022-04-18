import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import NavBar from "./components/NavBar"
import Calendar from "./components/Calendar"

function App() {
  const [sitters, setSitters] = useState([])
  const [clients, setClients] = useState([])
  const [appointments, setAppointments] = useState([])
  const [pets, setPets] = useState([])

  const baseUrl = "http://localhost:3000"


  useEffect(() => {
    fetch(baseUrl + "/sitters")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    fetch(baseUrl + "/clients")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    fetch(baseUrl + "/appointments")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    fetch(baseUrl + "/pets")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div className="App">
  
      <LoginPage />
      <SignupPage />

      <main>
        <Switch>
          
          <Route path="/home">
              <LandingPage />
          </Route>

        </Switch>
      </main>
    </div>
  );
}


export default App;

   /* <LandingPage /> */

     /* <NavBar />  */
 /* <Route path="/schedule">
         <Calendar sitters={sitters} clients={clients} appointments={appointments} pets={pets}/>
       </Route> */