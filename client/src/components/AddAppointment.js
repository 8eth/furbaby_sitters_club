import React, {useState} from 'react'

function AddAppointment({appointments, setAppointments}) {
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    appt_start: "",
    appt_end: "",
    petcare: "",
    client_id: "",
    sitter_id: ""
  })

  const initialFormState = {
    title: "",
    appt_start: "",
    appt_end: "",
    petcare: "",
    // client_id: "",
    // sitter_id: ""
  }
  
  function onCreateAppt(newAppt) {
    setAppointments([...appointments, newAppt])
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    console.log("Submitted")
  
    const newAppt = {
      title: formData.title,
      appt_start: formData.appt_start,
      appt_end: formData.appt_end,
      petcare: formData.petcare,
      client_id: 9,
      sitter_id: 11
    }
      
    fetch(`/appointments`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppt),
    })
    .then((r) => {
        if (r.ok) {
          r.json().then((appointment) => onCreateAppt(appointment));
      } else {
          r.json().then((err) => setErrors(err.errors));
      } 
    })
    .then(setFormData(initialFormState));
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    // <div>AddAppointment</div>
    <div className="background">
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
              <label htmlFor="title">Pet Name:</label>
              <input
                name="title"
                type="text"
                id={FormData.title}
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="appt_start">Appointment Start Date:</label>
              <input
                name="appt_start"
                type="date"
                id={FormData.appt_start}
                value={formData.appt_start}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="appt_end">Appointment End Date:</label>
              <input
                name="appt_end"
                type="date"
                id={FormData.appt_end}
                value={formData.appt_end}
                onChange={(e) => handleChange(e)}
              />
              <label>Pet Care Instructions:</label>
              <input
                name="petcare"
                type="text"
                id={FormData.petcare}
                value={formData.petcare}
                onChange={(e) => handleChange(e)}
              />
              {/* <label>Client ID:</label>
              <input
                name="client_id"
                type="text"
                id={FormData.client_id}
                placeholder=""
                value={formData.client_id}
                onChange={(e) => handleChange(e)}
              />
              <label>Sitter ID:</label>
              <input
                name="sitter_id"
                type="text"
                id={FormData.sitter_id}
                placeholder=""
                value={formData.sitter_id}
                onChange={(e) => handleChange(e)}
              /> */}
              <br></br>
              <br></br>
              <button className="ui submit button center" type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default AddAppointment