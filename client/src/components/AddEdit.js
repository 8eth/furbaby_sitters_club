import React,{ useState }  from 'react'

function AddEdit({appointment, setAppointments}) {
    const [apptFormData, setApptFormData] = useState ({ 
        appt_start: appointment.appt_start,
        appt_end: appointment.appt_end,
        petcare: appointment.petcare
    })

    // const initialFormState = {
    //     appt_start: "",
    //     appt_end: "",
    //     petcare: ""
    // }

    function handleChange(e) {
        setApptFormData({
          ...apptFormData,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) { 
        e.preventDefault();

        const editedAppt = {
            appt_start: apptFormData.appt_start,
            appt_end: apptFormData.appt_end,
            petcare: apptFormData.petcare
        }

        fetch(`/appointments/${appointment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedAppt),
        })
        .then(res => res.json())
        // .then(setAppointments(editedAppt))
        // .then(setApptFormData(initialFormState))
        // .then(console.log)
    }

    return (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Start Date</label>
                    <input 
                        name="appt_start" 
                        type="text"
                        id={FormData.appt_start}
                        value={apptFormData.appt_start}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group col-5">
                    <label>End Date</label>
                    <input 
                        name="appt_end" 
                        type="text" 
                        id={FormData.appt_end}
                        value={apptFormData.appt_end}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>PetCare</label>
                    <input 
                        name="petcare" 
                        type="text" 
                        id={FormData.petcare}
                        value={apptFormData.petcare}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <button className="ui submit green button center" type="submit">Submit</button>
        </form>
    );
}

export default AddEdit;