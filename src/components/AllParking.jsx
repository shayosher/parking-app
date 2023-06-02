import React, { useState } from 'react'

export default function AllParking(props) {

    const [flag, setFlag] = useState(false);

    const show = () => {
        if (flag) {
            return <div>
                <h1>{props.users.parking.city} {props.users.parking.price}</h1>
                <button onClick={()=>{props.moveToHistory()}}>PAY</button>
                <button onClick={()=>{setFlag(!flag)}}>CLOSE</button>
            </div>

        }
    }
    return (
        <div onClick={()=>{setFlag(true)}}>
            <h1>{props.users.carNumber}</h1>
            <h1>{props.users.carType}</h1>
            {show()}
        </div>
    )
}
