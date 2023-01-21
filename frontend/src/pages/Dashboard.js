import React from 'react'
import "./card.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Jobs from "./Jobs";
import Contact from "./Contact";
import Navbar from './Navbar';

const linkStyle = {
    textDecoration: "none",
    padding: '11%',
    backgroundColor: 'rgb(0, 18, 25)',
    ':hover': {
        color: 'black'
    }
};

function Dashboard(props) {

    const navigate = useNavigate();

    function handleLogOut() {
        props.logout();
        navigate('/login');
    }

    return (
        <div>
            <br />
            <div>
                {/* <nav style={{ textAlign: "center", marginTop: "20px" }}>
                    <Link to="/Dashboard/Home" style={{ padding: "10px" }}>Home</Link>
                    <Link to="/Dashboard/AboutUs" style={{ padding: "10px" }}>AboutUs</Link>
                    <Link to="/Dashboard/Jobs" style={{ padding: "10px" }}>Jobs</Link>
                    <Link to="/Dashboard/Contact" style={{ padding: "10px" }}>Contact</Link>
                </nav> */}
                <Navbar/>
                <Routes>
                    <Route path="/Home" element={<Home />}></Route>         
                    <Route path="/AboutUs" element={<AboutUs />}></Route>
                    <Route path="/Jobs" element={<Jobs />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                </Routes>
                <button onClick={handleLogOut} style={{marginTop: '25px', color: 'rgb(0, 18, 25)', fontWeight: 'bold', color: 'rgb(212, 212, 245)'}}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard
