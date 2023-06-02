import React from 'react'
import { useState } from 'react';

export default function History(props) {

    const[choose,setChoose]=useState('');

    const sort = () => {
        if (choose == 'low') {
            props.users[props.index].parkingHistory.sort((a, b) => (a.price - b.price));
            props.setUsers([...props.users]);
        }
        else if (choose == 'high') {
            props.users[props.index].parkingHistory.sort((a, b) => (b.price - a.price));
            props.setUsers([...props.users]);
        }
    }


    return (
        <div>
            <select onClick={sort} onChange={(e) => { setChoose(e.target.value) }}>
                <option disabled>choose</option>
                <option value="low">low</option>
                <option value="high">high</option>
            </select>
            {props.users[props.index].parkingHistory.map((val)=>{
                return <h1>{val.city} {val.price}</h1>
            })}
        </div>
    )
}
