import React, {useState} from "react";

function NewUserForm({newUser}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9292/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName
            }),
        }) 
        .then(r => r.json())
        .then(aNewUser => {
            newUser(aNewUser);
            setFirstName('')
            setLastName('')
        })
    }
    return (
    <div className="new-user-form">
        <div className="container">
            <div className="row">
                <div className="col-3">
                <h3>New User Form</h3>
                <form  onSubmit={handleSubmit}>
                    <label>First Name: </label>
                        <input className="form-control" onChange={e => setFirstName(e.target.value)} value={firstName}></input>
                    <label >Last Name: </label>
                        <input className="form-control" onChange={e => setLastName(e.target.value)} value={lastName}></input>
                    <button className="btn btn-primary" type='submit'>Add User</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    );
  }


  export default NewUserForm;