import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { newContext } from '../App';
import { Link } from 'react-router-dom';

function Login() {
  const [employee] = useContext(newContext)
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, seterror] = useState(false)

  const handleLogin = () => {
    let filterData = employee.filter(item => item.email === userName && item.password === password)
    if (filterData.length > 0) {
      seterror(false)
    } else {
      seterror(true)
    }
  }
    return (
      <div>
        <div className='reg-cont center'>
          <div className='reg-head'>Register</div>
          <div className='form'>
            <label>Email </label>
            <input type='email' value={userName} onChange={(e) => setuserName(e.target.value)}></input><br></br>
            <label>Password </label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
            <div>
              {error && <span>login filed</span>}
              <Button variant="primary" onClick={handleLogin}><Link to='/employee'>Login</Link></Button>

              <div>Forgot Password</div>
            </div>
          </div>
        </div>
      </div>
    )
    }

  export default Login