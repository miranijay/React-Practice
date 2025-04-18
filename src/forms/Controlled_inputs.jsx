import React, { useState } from "react";
import { data } from "../data/data";

const ControlledInputs = () => {

    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            alert('Please enter a name');
            return;
        }

        const fakeId = Date.now();
        const newUser = {id:fakeId, name};
        const updatedUsers = [...users,newUser];
        setUsers(updatedUsers);
        setName('');
    }

    const removeItem = (id) => {
        const updatedUsers = users.filter((person) => person.id !== id);
        setUsers(updatedUsers);
    }

    return(
        <>
            <form action="" className="form" onSubmit={handleSubmit}>
                <h4>Add Users</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* <div className="form-row">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div> */}

                <button type="submit" className="btn btn-block">Submit</button>
                <h4 style={{marginBottom: "16px", color:"black", textDecorationLine: "underline"}}>Users</h4>
                {
                    users.map(({id, name}) => {
                        return(
                            <div key={id}>
                                <h2>{name}</h2>
                                <button className="remove-btn" type="button" onClick={() => removeItem(id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </form>
        </>
    )
} 

export default ControlledInputs;