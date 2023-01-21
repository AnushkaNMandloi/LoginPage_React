import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './LoginPage.css';
import Dashboard from './Dashboard'
import Register from './Register'
import { Redirect, BrowserRouter , Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useRef, useContext } from 'react';
import axios from '../api/axios';
import RegisterPage from './Register';

function LoginPage(props) {
  // const history = useHistory();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setErrorMsg('');
  }, [fullName, email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/validate',
        { email, password }
      );
      if (response.data.exists) {
      //if (true) {
        console.log("User found!");
        props.login();
        // redirect to dashboard page
          navigate("/Home");
      }
      else{
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
        console.log("Missing un or password");
        //setErrorMsg('Missing username or password');
      }
      else if (err.response?.status === 401) {
        setErrorMsg('Unauthorized');
        console.log("Incorrect details");
      } else {
        setErrorMsg('Login failed!');
      }
    }
  }

  const handleRegister = () => {
    //redirect to register page
    navigate('/RegisterPage')
  }

  return (
    <div>
      <form className="myForm">
        <h3>LogIn</h3>
        <br />

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

        <div className="d-grid" style={{ backgroundColor: "rgb(0, 18, 25)" }}>
          <button onClick={handleSubmit}>Submit</button>
        </div><br />

        <div className="d-grid" style={{ backgroundColor: "rgb(0, 18, 25)" }}>
          <button onClick={handleRegister}>Register here
          </button>
        </div>

        {/* <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes> */}

      </form>
    </div>
  )
}

export default LoginPage

