import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    }, [])

    return (
        <>
            <h1>UseEffect Hook Example</h1>
            <h3>Github Users</h3>
            <ul className="users">
                {data.map((user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FetchData;