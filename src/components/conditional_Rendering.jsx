import React, { useState } from "react";

const ConditionalRendering = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <div>
                <h1>Conditional Rendering</h1>
                <button 
                    className="btn"
                    onClick={() => setToggle(!toggle)}
                >
                    Toggle
                </button>
                {toggle && <RandomComponent />}
            </div>
        </>
    )
}

const RandomComponent = () => {
    
    return (
        <>
            <div>
                <h1>Hello there</h1>
            </div>
        </>
    )
}

export default ConditionalRendering;