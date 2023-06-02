import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Parking(props) {

  const nav = useNavigate();

  const startParking = () => {
    let choose = document.getElementById('choose').value

    if (choose == 'choose') {
      alert('enter city')
      return
    }
    else if (choose == 'tel Aviv') {
      props.addParking({ city: choose, price: 150 })

    }
    else if (choose == 'netania') {

      props.addParking({ city: choose, price: 100 })
    }
    else if (choose == 'rechovot') {

      props.addParking({ city: choose, price: 50 })
    }

    nav('/allParking')
  }

  return (
    <div>
      <select id='choose'>
        <option value="choose"  >choose</option>
        <option value="tel Aviv">Tel Aviv</option>
        <option value="netania">Netania</option>
        <option value="rechovot">Rechovot</option>
      </select>
      <br />
      <h2>{props.users[props.index].carType}</h2>
      <br />
      <button onClick={() => { startParking() }}>Start Parking</button>
    </div>
  )
}
