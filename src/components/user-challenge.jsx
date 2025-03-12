import React, { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);
    
    const logIn = () => {
        setUser({name: 'Jay'});
    }
    const logOut = () => {
        setUser(null);
    }

    return(
        <>
            <div>
                <h1>Conditional Rendering - User Challenge</h1>
                {
                    user ? <div>
                        <h4>Hello there, {user.name}</h4>
                        <button className="btn" onClick={logOut}>LogOut</button>
                    </div> : 
                    <div>
                        <h4>Please LogIn</h4>
                        <button className="btn" onClick={logIn}>LogIn</button>
                    </div>
                }
            </div>
        </>
    )
}

export default UserChallenge;