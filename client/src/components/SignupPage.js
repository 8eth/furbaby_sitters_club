import React, {useState} from 'react'

  function SignupPage({ onLogin }) {
    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
      username: "",
      password: "",
      passwordConfirmation: "",
      fullname: "",
      image: "",
      address:"",
      number:""
    })

    const initialFormState = {
      username: "",
      password: "",
      passwordConfirmation: "",
      fullname: "",
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
      setErrors([]);

      const newUser = { 
        username: formData.username,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        fullname: formData.fullname,
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
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
        // .then(onLogin)
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
                <div>
                  {errors.map((error) => (
                    <ul className="errors">- {error}</ul>
                  ))}
                </div>
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
              <label>Full Name:</label>
              <input
                name="fullname"
                type="text"
                id={FormData.name}
                value={formData.fullname}
                onChange={(e) => handleChange(e)}
              />
              <label>Image:</label>
              <input
                name="image"
                type="text"
                id={FormData.image}
                placeholder="URL"
                value={formData.image}
                onChange={(e) => handleChange(e)}
              />
              <label>Address:</label>
              <input
                name="address"
                type="text"
                id={FormData.address}
                placeholder="ex. 123 N Street, City, State, Zip  "
                value={formData.address}
                onChange={(e) => handleChange(e)}
              />
              <label>Phone Number:</label>
              <input
                name="number"
                type="text"
                id={FormData.number}
                placeholder="###-###-#### "
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
