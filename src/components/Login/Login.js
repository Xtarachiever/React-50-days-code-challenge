import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../../firebase";

function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            // it successfully created a new user with email and password
              history.push('/home')
          })
          .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
              history.push('/home')
            }
          })
          .catch(error => alert(error.message))
    }
  return (
    <div className="login_wrapper">
        <form className="form">
            <label htmlFor='name'>
                <span>Name:</span>
                <input type="text" placeholder='Name' id="name"/>
            </label>
            <label htmlFor='email'>
                <span>Email:</span>
                <input type="text" placeholder='Email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor='password'>
                <span>Password:</span>
                <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>
            </label>
            <button onClick={register}>Sign Up</button>
        </form>
        <span className='login'>Already have an account? <a href='!#' onClick={signIn}>Login</a></span>
    </div>
  )
}

export default Login