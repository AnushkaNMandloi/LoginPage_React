import React from 'react'
import Card from 'react-bootstrap/Card';
import "./card.css";

function Jobs(props) {

  const job = ["Business Analyst",
    "Community Manager",
    "Cybersecurity Engineer",
    "Data Scientist",
    "Database Administrator",
    "Front End Developer",
    "Information System Architect",
    "Io IT Network Engineer",
    "IT Project Manager",
    "Industrial Computer Technician",
    "Motion Designer",
    "Network Engineer",
    "SEO Consultant",
    "Security Engineer"]

  return (
    <div className='card'>
      <center>
        <Card style={{ width: '38rem', height: '28rem' ,backgroundColor: 'rgb(0, 18, 25)' }}>
          <Card.Body style={{ backgroundColor: 'rgb(0, 18, 25)' }}>
            <Card.Title style={{ backgroundColor: 'rgb(0, 18, 25)' }}>Card Title</Card.Title>
            <Card.Text style={{ backgroundColor: 'rgb(0, 18, 25)' }}>
              Below positions are open in the organization
              <ul style={{ backgroundColor: 'rgb(0, 18, 25)' }}>
                {job.map(item => <li style={{ listStyle: 'none', backgroundColor: 'rgb(0, 18, 25)' }}>{item}</li>)}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  )
}

export default Jobs
