import React from 'react';
import './Login.css'

function Login() {
  return (
    <div className="login_wrapper">
        <form className="form">
            <label htmlFor='name'>
                <span>Name:</span>
                <input type="text" placeholder='Name' id="name"/>
            </label>
            <label htmlFor='email'>
                <span>Email:</span>
                <input type="text" placeholder='Email' id="email"/>
            </label>
            <label htmlFor='password'>
                <span>Password:</span>
                <input type="text" placeholder='Password' id="password"/>
            </label>
            <button>Sign Up</button>
        </form>
        <span className='login'>Already have an account? <a href='!#'>Login</a></span>
    </div>
  )
}

export default Login