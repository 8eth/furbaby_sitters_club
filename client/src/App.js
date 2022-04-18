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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const baseUrl = "http://localhost:3000"

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

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
  
      <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
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