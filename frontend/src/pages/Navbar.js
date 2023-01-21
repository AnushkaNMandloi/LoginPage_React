const { Link } = require("react-router-dom");

const linkStyle = {
    textDecoration: "none",
    padding: '11%',
    fontWeight: 'bold',
    backgroundColor: 'rgb(0, 95, 115)',
    '&:hover': {
        color: 'rgb(155, 34, 38)'
    }
};

const Navbar = () => {
    return (
        <nav style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/Home" style={linkStyle}>Home</Link>
            <Link to="/AboutUs" style={linkStyle}>AboutUs</Link>
            <Link to="/Jobs" style={linkStyle}>Jobs</Link>
            <Link to="/Contact" style={linkStyle}erx>Contact</Link>
        </nav>
    );
};

export default Navbar;
