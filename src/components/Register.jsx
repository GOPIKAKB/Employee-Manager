import React, { useContext, useState } from 'react'
import './style/Register.css'
import { newContext } from '../App'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function Register() {
    const [isregister, setRegister] = useState(false)
    const [confirtPswd, setConfirmPswd] = useState('')
    const [pswderror, setpswderror] = useState(false)
    const [ employee, setEmployee, name, setName, email, setEmail, password, setPassword ] = useContext(newContext)

    const handleRegister = () => {
        if (password === confirtPswd) {
            setEmployee([...employee, { name, email, password }])
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPswd('')
            setRegister(true)
            setpswderror(false)
        } else {
            setpswderror(true)
        }
    }
    return (
        <div>
            <div className='reg-cont center'>
                <div className='reg-head'>Register</div>
                {isregister ?
                    <p className='center'>you are successfully resistered.</p>
                    : <div className='form'>
                        <label>Name </label>
                        <input type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}></input><br></br>
                        <label>Email </label>
                        <input type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input><br></br>
                        <label>Password </label>
                        <input type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input><br></br>
                        <label>Confirm Password </label>
                        <input type='password'
                            value={confirtPswd}
                            onChange={(e) => setConfirmPswd(e.target.value)}></input><br></br>
                        {pswderror && <span className='center'>password do not match!</span>}
                        <Button variant="primary" onClick={handleRegister}>Register</Button>
                    </div>}
            </div>
        </div>
    )
}

export default Register
