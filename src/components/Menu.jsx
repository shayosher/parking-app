import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Link to={'allParking'}><button>all Parking</button></Link>
            <Link to={'/chooseParking'}><button>Parking</button></Link>
            <Link to={'history'}><button>History</button></Link>
            <Link to={'/'}><button onClick={()=>{props.setShowMenu(false)}}>Exit</button></Link>
        </div>
    )
}
