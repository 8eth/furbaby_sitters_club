import React, {useState} from 'react'


function LoginPage({ onLogin, setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(user=>{
          setUser(user)
          setIsAuthenticated(true)
        })
        
      } else {
        res.json()
        .then(json => setError(json.error))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );

}


export default LoginPage

// import React, {useState} from 'react'
// import Auth from './Auth'


// function Login({setUser,setIsAuthenticated}) {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
   
//     const [error, setError] = useState([])

//     function onSubmit(e){
//         e.preventDefault()
//         const user = {
//             username: username,
//             password
//         }
       
//         fetch(`/login`,{
//           method:'POST',
//           headers:{'Content-Type': 'application/json'},
//           body:JSON.stringify(user)
//         })
//         .then(res => {
//           if(res.ok){
//             res.json()
//             .then(user=>{
//               setUser(user)
//               setIsAuthenticated(true)
//             })
            
//           } else {
//             res.json()
//             .then(json => setError(json.error))
//           }
//         })
//     }
//     return (
      
//         <> 
//         <h1>Flatiron Theater Company</h1>
//         <h1>Login</h1>
//         <form onSubmit={onSubmit}>
//         <label>
//           Username
   
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//          Password
    
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
       
//         <input type="submit" value="Login!" />
//       </form>
//       {error?<div>{error}</div>:null}
//       <Auth setUser={setUser} setIsAuthenticated={setUser}/>
//         </>
//     )
// }

// export default Login;