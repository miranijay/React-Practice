import React, { useState } from "react";

const ToggleComponent = () => {
    const [showAlert, setShowAlert] = useState(false);

    // const toggleAlert = () => {
    //     if(showAlert) {
    //         setShowAlert(false);
    //         return;
    //     }
    //     setShowAlert(true);
    // }

    return (
        <>
            <div>
                <h1>Toggle Component Example</h1>
                <button 
                    className="btn" 
                    onClick={() => setShowAlert(!showAlert)}
                    >
                    Toggle
                </button>
                {showAlert && <Alert />}
            </div>
        </>
    )
}

const Alert = () => {
    return (
        <div className="alert alert-danger">
            Error!!...
        </div>
    )
}

export default ToggleComponent;