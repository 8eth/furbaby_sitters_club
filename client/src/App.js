import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import SitterCalendar from "./components/SitterCalendar"
import AppointmentDetail from "./components/AppointmentDetail"
import ProfilePage from "./components/ProfilePage"
import PetPage from "./components/PetPage"

function App() {
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

  function onLogin(newUser) {
    setUser([...user, newUser])
  }
  
  if (!isAuthenticated) return <LoginPage error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!user) return <LoginPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    
    <div className="background">
      <h1 className="logo">Furbaby Sitters Club</h1>

      <Switch>
        <Route exact path="/">
          <LandingPage 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

        <Route exact path="/calendar">
            <SitterCalendar 
             setUser={setUser} 
             setIsAuthenticated={setIsAuthenticated}
             user={user}
            />
        </Route>

        <Route exact path="/appointmentdetails">
          <AppointmentDetail 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

        <Route path="/signup">
          <SignupPage 
            onLogin={onLogin}
          />
        </Route>

        <Route path="/login">
          <LoginPage 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated} 
          />
        </Route>

        <Route path="/pets">
          <PetPage 
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

        <Route path="/profiles">
          <ProfilePage
            setUser={setUser} 
            setIsAuthenticated={setIsAuthenticated}
            user={user}
          />
        </Route>

      </Switch>
      <div>Footer</div>
      
    </div>
  );
}

export default App;