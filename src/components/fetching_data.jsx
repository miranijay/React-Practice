import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    setisError(true);
                    setisLoading(false);
                    return;
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setisError(true);
                console.log(error);
            }
            setisLoading(false);
        }
        fetchdata();
    }, [])

    if(isLoading) {
        return <h2>Loading....</h2>
    }
    if(isError) {
        return <h2>There is Error...</h2>
    }

    const {avatar_url, name, company, bio} = user;

    return (
        <>
            <h1>Multiple Returns Fetch Data Example</h1>
            <img 
                src={avatar_url} 
                alt={name} 
                style={{ width: '150px', borderRadius:'18px', display:'block', margin:'auto'}} 
            />
            <h2>{name}</h2>
            <h4>Works at {company}</h4>
            <p>{bio}</p>
        </>
    )
}

export default MultipleReturnsFetchData;