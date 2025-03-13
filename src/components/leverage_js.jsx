import React from "react";
import avatar from '../assets/default-avatar.svg';

const Person = ({ name, nickName='Baked', images}) => {

    const img = images?.[0]?.small?.url || avatar;

    return(
        <div>
            <img src={img} alt={name} style={{width:'50px', display:'block', margin:'auto', marginTop:'20px'}} />
            <h4>Name: {name}</h4>
            <p>Nickname: {nickName}</p>
        </div>
    )
}

export default Person;