import React from 'react'
import { right } from '@popperjs/core'
import './login.css'

const Login = () => {
    return (
        <div className='row'>
            <div className='col-4'></div>
            
            <div className='col-4'>
            <h1 class='m-5'>Login</h1>
            <div class="form-floating m-3">
                <input type="email" class="form-control" id="Email"/>
                <label htmlFor="Email">Email address</label>
            </div>
            <div class="form-floating m-3">
                <input type="password" class="form-control" id="Password"/>
                <label htmlFor="Password">Password</label>

            <div style={{textAlign: cente}}>
                <button type="button" className="btn btn-dark mt-4" id='btnRegister'>Login</button>
            </div>
            
            <div className='col-4'></div>
            </div>
        </div>
        </div>
    )
}

export default Login
