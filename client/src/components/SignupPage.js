import React, {useState} from 'react'


  function SignupPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          // full_name: fullname,
          image,
          address,
          // phone_number: number,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
      <div className="background">
        <h3 className="center-content">Signup</h3>
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={handleSubmit}
              >
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <label>Full Name</label>
              {/* <input
                type="text"
                id="name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              /> */}
              <label>Image</label>
              <input
                type="text"
                id="image"
                placeholder="URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Address</label>
              <input
                type="text"
                id="address"
                placeholder="ex. 123 N Street, City, State, Zip"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label>Phone Number</label>
              {/* <input
                type="text"
                id="number"
                placeholder="###-###-####"
                value={number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              /> */}
              <br></br>
              <br></br>
              <button className="ui submit button center" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default SignupPage