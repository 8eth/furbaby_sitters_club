import React, {useState} from 'react'

  function SignupPage({ onLogin, setUser }) {

    const [formData, setFormData] = useState({
      username: "",
      password: "",
      passwordConfirmation: "",
      fullName: "",
      image: "",
      address:"",
      number:""
    })

    const initialFormState = {
      username: "",
      password: "",
      passwordConfirmation: "",
      fullName: "",
      image: "",
      address:"",
      number:""
    };

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();

      const newUser = { 
        username: formData.username,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        fullName: formData.fullName,
        image: formData.image,
        address: formData.address,
        number: formData.number
      }

      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => r.json())
        .then(onLogin)
        .then(setFormData(initialFormState));
    }
  
    return (
      <div className="background">
        <h3 className="center-content">Signup</h3>
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={(e) => handleSubmit(e)}
              >
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                type="text"
                id={FormData.username}
                value={formData.username}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                id={FormData.password}
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                name="passwordConfirmation"
                type="password"
                id={FormData.password_confirmation}
                value={formData.passwordConfirmation}
                onChange={(e) => handleChange(e)}
              />
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                id={FormData.name}
                placeholder="*Required"
                value={formData.fullName}
                onChange={(e) => handleChange(e)}
              />
              <label>Image</label>
              <input
                name="image"
                type="text"
                id={FormData.image}
                placeholder="URL"
                value={formData.image}
                onChange={(e) => handleChange(e)}
              />
              <label>Address</label>
              <input
                name="address"
                type="text"
                id={FormData.address}
                placeholder="*Required ex. 123 N Street, City, State, Zip  "
                value={formData.address}
                onChange={(e) => handleChange(e)}
              />
              <label>Phone Number</label>
              <input
                name="number"
                type="text"
                id={FormData.number}
                placeholder="*Required ###-###-#### "
                value={formData.number}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <br></br>
              <button className="ui submit button center" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default SignupPage

// import React, {useState} from 'react'


//   function SignupPage({ onLogin }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     const [fullName, setFullName] = useState("");
//     const [image, setImage] = useState("");
//     const [address, setAddress] = useState("");
//     const [number, setNumber] = useState("");
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       fetch("/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           password,
//           password_confirmation: passwordConfirmation,
//           fullName,
//           image,
//           address,
//           number,
//         }),
//       })
//         .then((r) => r.json())
//         .then(onLogin);
//     }
  
//     return (
//       <div className="background">
//         <h3 className="center-content">Signup</h3>
//         <div className="form-border center-content">
//           <div className="ui grid">
//             <form 
//                 className="ui two fields form center"
//                 onSubmit={handleSubmit}
//               >
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <label htmlFor="password_confirmation">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="password_confirmation"
//                 value={passwordConfirmation}
//                 onChange={(e) => setPasswordConfirmation(e.target.value)}
//               />
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//               <label>Image</label>
//               <input
//                 type="text"
//                 id="image"
//                 placeholder="URL"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               />
//               <label>Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 placeholder="ex. 123 N Street, City, State, Zip"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//               <label>Phone Number</label>
//               <input
//                 type="text"
//                 id="number"
//                 placeholder="###-###-####"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//               />
//               <br></br>
//               <br></br>
//               <button className="ui submit button center" type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default SignupPage