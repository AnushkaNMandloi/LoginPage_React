import React from 'react'
import { Form, Button } from "react-bootstrap";
import LoginPage from './LoginPage'
import { Routes, Route, useNavigate, useHistory, Link } from 'react-router-dom';
import axios from '../api/axios'
import { useRef, useContext } from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const navigate = useNavigate();
  //history = useHistory();
  const userRef = useRef();
  const errRef = useRef();

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(fullName);
    try {
      const response = await axios.post('/user/create',
        { fullName, email, password }
      );
      console.log("register response data: ", response);
      if (response.data.isCreated) {
        console.log("User registered successfully!");
      }
      else {
        // console.log("Error!!!!", response.data.msg);
        const alert = () => {toast("Please enter details")};
        throw(new Error({
          status:response.status,
          msg: response.msg
        }));
        
      }
    } catch (err) {
      if (!err?.response) {
        setErrorMsg('No server response');
      }
      else if (err.response?.status === 400) {
        setErrorMsg(err.response.msg);
        console.log("Invalid data!");
      }
      else if (err.response?.status === 401) {
        setErrorMsg('Unauthorized');
      } else {
        setErrorMsg('Login failed!');
      }
    }
  }

  const handleLogin = () => {
    //redirect to register page
    navigate('/login')
  }

  return (
    <div>
      <form className="myForm">
        <h3>Sign Up</h3>
        <br />
        <div className="mb-3">
          <input
            type="fullName"
            className="form-control"
            name="fullName"
            placeholder="Enter full name"
            onChange={(e) => setfullName(e.target.value)}
          />
        </div><br />

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div><br />

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />

        <div className="d-grid">
          <button onClick={handleRegister}>Submit</button>
        </div><br />

        <div className='d-grid'>
          <button onClick={handleLogin}>Login here</button>
        </div>

        {/* <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes> */}
      </form>
    </div>
  )
}

export default Register
