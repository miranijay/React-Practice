import React, { useEffect, useState } from "react";

const ConditionalRendering = () => {
    const [toggle, setToggle] = useState(false);

    console.log('Rendering...');
    return(
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
    )
}

const RandomComponent = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Interval is running...');
        },1000);
        return () => {
            clearInterval(interval);
            console.log('Cleanup...');
        }
    }, [])

    return (
        <>
            <div>
                <h2>Hello there</h2>
            </div>
        </>
    )
}

export default ConditionalRendering;