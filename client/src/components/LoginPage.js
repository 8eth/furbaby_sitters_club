import React, {useState} from 'react'
import SignupPage from './SignupPage';


function LoginPage({ onLogin, setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        username: username, 
        password: password
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
        .then(json => setError(json.error))
      }
    })
  }

  return (
    <div className="background">
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
            <label> Password
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              <br></br>
            </label>
            <br></br>
            <button className="ui submit button center" type="submit">Login</button>
          </form>
        </div>
    </div>
    <SignupPage />
    </div>
  );

}


export default LoginPage