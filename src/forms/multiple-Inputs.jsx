import React, { useState } from "react";

const MultipleInputs = () => {

    const [users, setUsers] = useState({
        name:'',
        email:'',
        password:'',
    });
    
    const handleChange = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
    }

    return(
        <>
            <form action="" className="form" onSubmit={handleSubmit}>
                <h4>Multiple Inputs</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        value={users.name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input"
                        value={users.email}
                        onChange={handleChange}
                        name="email" 
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-input"
                        value={users.password}
                        onChange={handleChange}
                        name="password" 
                    />
                </div>

                <button type="submit" className="btn btn-block">Submit</button>
                {/* <h4 style={{marginBottom: "16px", color:"black", textDecorationLine: "underline"}}>Users</h4>
                {
                    users.map(({id, name}) => {
                        return(
                            <div key={id}>
                                <h2>{name}</h2>
                                <button className="remove-btn" type="button" onClick={() => removeItem(id)}>Remove</button>
                            </div>
                        )
                    })
                } */}
            </form>
        </>
    )
} 

export default MultipleInputs;