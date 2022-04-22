import React, { useState } from 'react'
import SignupPage from './SignupPage';


function LoginPage({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
   
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/login`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username, 
        password,
      })
    })
      .then(res => {
        if(res.ok){
          res.json()
          .then(username=>{
            setUser(username)
            setIsAuthenticated(true)
          })
        } else {
          res.json()
          .then((err) => setErrors(err.errors))
        }
    })
  }

  return (
    <div className="background">
      <h1 className="font-face-gm">Furbaby Sitters Club</h1>
      <h3 className="center-content">Login</h3>
      <div className="form-border center-content">
        <div className="ui grid">
          <form 
              className="ui two fields form center"
              onSubmit={handleSubmit}
            >
            <label> Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <br></br>
            <div>
              {errors.map((error) => (
                <ul className="errors">{error}</ul>
              ))}
            </div>
            <br></br>
            <button className="ui submit button center" type="submit">Login</button>
          </form>
        </div>
    </div>
    <SignupPage onLogin={setUser}/>
    <div className='footer'>
        <div>Furbaby Sitters Club   | //Flatiron School</div>   
        <div>Created By: Beth Fekadu, Bevin Duncan, Kristina Peru | GitHub: <a href="https://github.com/8eth">Beth</a>, <a href="https://github.com/bevin-duncan">Bevin</a>, <a href="https://github.com/krisperu">Kristina</a></div>
      </div> 
    </div>
  );

}


export default LoginPage