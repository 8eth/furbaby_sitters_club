import React, { useState, useEffect } from "react"
import LandingPage from "./components/LandingPage"
import NavBar from "./components/NavBar"

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
     <LandingPage sitters={sitters} clients={clients} appointments={appointments} pets={pets}/>
     <NavBar />
    </div>
  );
}


export default App;
