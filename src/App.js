import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { createContext, useState } from 'react';
import Employee from './components/Employee';

export const newContext=createContext()
function App() {
  const [employee,setEmployee]=useState([])
  const [name, setName]= useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('hgh')
  return (
    <div>
     < newContext.Provider value={[employee,setEmployee,name, setName,email, setEmail,password, setPassword]}>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Register/>}> </Route>
           <Route path='/login' element={<Login/>}> </Route>
          <Route path='/employee' element={<Employee/>}> </Route>
        </Routes>
      </BrowserRouter>
      </newContext.Provider>
    </div>
  );
}

export default App;
