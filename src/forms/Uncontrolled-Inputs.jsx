import React, { useState } from "react";

const UncontrolledInputs = () => {

    const [value, setValue] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <form action="" className="form" onSubmit={handleSubmit}>
                <h4>Form Data API</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        name="name"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input"
                        name="email" 
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-input"
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

export default UncontrolledInputs;