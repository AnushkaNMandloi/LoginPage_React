import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/Register'
import Dashboard from "./pages/Dashboard"
import Protected from "./pages/Protected";
import React, { useState } from 'react'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
      console.log('login called');
      setisLoggedIn(true);
  };
  const logOut = () => {
      setisLoggedIn(false);
  };
  return (
      <main>
          <header>
              <center>
                  <Router>
                      <Routes>
                          <Route path="/login" element={<LoginPage login={logIn}/>} />
                          <Route path="/RegisterPage" element={<RegisterPage login={logIn}/>} />
                          
                          <Route
                              path="/*"
                              element={
                                  <Protected isLoggedIn={isLoggedIn}>
                                      <Dashboard logout={logOut}/>
                                  </Protected>
                              }
                          />
                      </Routes>
                  </Router>
              </center>
          </header>
      </main>
  );
}

export default App;


{/* <div className="App">
      Hello world!!
      <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/AboutUs'>AboutUs</Link>
        <Link to='/Jobs'>Jobs</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/LoginPage'>LoginPage</Link>
        <Link to='/RegisterPage'>RegisterPage</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Jobs" element={<Jobs/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
      </Routes>
    </Router>

    </div> */}
