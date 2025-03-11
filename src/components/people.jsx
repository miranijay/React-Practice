// UseState Example

import React, { useState } from "react";
import { data } from "../data/data.js";

export default function People() {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return(
        <>
            <div>
                <h1>UseState Example</h1>
                {people.map(({id, name}) => {
                    return(
                        <div key={id}>
                            <h4>{name}</h4>
                            <button className="remove-btn" type="button" onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    );
                })}
                <button 
                    type="button"
                    className="btn"
                    style={{marginTop:"16px"}}
                    onClick={() => setPeople([])}
                    >
                        Clear All
                </button>
            </div>
        </>
    );
}