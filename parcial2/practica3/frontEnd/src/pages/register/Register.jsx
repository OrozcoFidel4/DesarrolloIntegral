import { right } from '@popperjs/core'
import React from 'react'

const Register = () => {
    return (
        <div className='row'>
            <h1 className='mt-5'>Register</h1>
            <div className='col-1'></div>
            <div className='col-5'> 
                <div className="form-floating mt-4">
                    <input type="text" className="form-control" id="NameInput"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mt-4">
                    <input type="password" className="form-control" id="PasswordInput"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </div>

            <div className='col-5'>
                <div className="form-floating mt-4">
                    <input type="Email" className="form-control" id="EmailInput"/>
                    <label htmlFor="floatingInput">E-Mail</label>
                </div>

                <div className="form-floating mt-4">
                    <select className="form-select" id="RoleInput">
                        <option value="Guest">Guest</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <label htmlFor="floatingPassword">Role</label>
                </div>

                <div style={{textAlign: right}}>
                    <button type="button" className="btn btn-dark mt-4" id='btnRegister'>Register</button>
                </div>
            </div>
            <div className='col-1'></div>
            
        </div>
    )
}

export default Register
