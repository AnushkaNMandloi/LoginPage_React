import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css";

function Contact(props) {

  return (
    <div className='card'>
      <center>
      <Card style={{ width: '38rem', height: '25rem',backgroundColor: 'rgb(0, 18, 25)'}}>
      <Card.Body style={{ backgroundColor: 'rgb(0, 18, 25)', marginTop: '10%'}}>
        <Card.Title style={{ backgroundColor: 'rgb(0, 18, 25)'}}>Card Title</Card.Title>
        <Card.Text style={{ backgroundColor: 'rgb(0, 18, 25)'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    </center>
    </div>
  )
}

export default Contact
