import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {

    const nav = useNavigate()

    const [userName, setUserName] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [carType, setCarType] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        if (userName == '') {
            alert('enter name');
            return
        }
        for (let i = 0; i < userName.length; i++) {
            if (userName.charAt(i) < 'a' || userName.charAt(i) > 'z') {
                alert('userName only small letter');
                return
            }
        }
        if (carNumber.length != 8) {
            alert('car Number must be 8 numbers!')
            return
        }
        if (password == '') {
            alert('enter pssword');
            return
        }
        else if (password.length < 4 || password.length > 8) {
            alert('enter between 4-8');
            return
        }
        let flag1 = false;
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) >= '!' && password.charAt(i) <= '/') {
                flag1 = true;
                break;
            }
        }
        if (flag1 == false) {
            alert('enter password with special symbols');
            return;
        }
        let flag2 = false;
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
                flag2 = true;
                break;
            }
        }
        if (flag2 == false) {
            alert('enter password with big char');
            return;
        }
        props.addUser(userName, carNumber, carType, password);
        nav('/');
    }

    return (
        <div>
            <input onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='User Name' /> <br />
            <input onChange={(e) => { setCarNumber(e.target.value) }} type="text" placeholder='carNumber' /> <br />
            <input onChange={(e) => { setCarType(e.target.value) }} type="text" placeholder='carType' /> <br />
            <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Password' /> <br /><br />
            <button onClick={register}>REGISTER</button>
        </div>
    )
}
