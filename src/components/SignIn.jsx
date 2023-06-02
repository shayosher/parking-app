import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn(props) {

    const nav = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = () => {
        let name = document.getElementById('name');
        let pass = document.getElementById('password');

        let result = props.users.find((val) => (val.userName == userName && val.password == password));

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
        if (password == '') {
            alert('enter pssword');
            return
        }
        else if (password.length < 4 || password.length > 8) {
            alert('enter password between 4-8');
            return
        }
        if (result == undefined) {
            alert('user not found!');
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
        props.setShowMenu(true);
        // let index = props.users.findIndex((val) => (val==result));
        let index = props.users.findIndex((val) =>{
          return  val==result
        })
        props.setIndex(index);
        nav('/chooseParking');
    }
    return (
        <div>
            <input onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='User Name' /> <br />
            <p id='name'></p>
            <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Password' /> <br /><br />
            <p id='pass'></p>
            <button onClick={checkUser}>signIn</button>
            <Link to={'/signup'}><button>signUp</button></Link>
        </div>
    )
}
