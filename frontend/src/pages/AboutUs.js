import React from 'react'
import Card from 'react-bootstrap/Card';
import "./card.css";

function AboutUs(props) {

  return (
    <div className="card">
      <center>
        <Card style={{ width: '38rem', height: '25rem', backgroundColor: 'rgb(0, 18, 25)' }}>
          <Card.Body style={{ backgroundColor: 'rgb(0, 18, 25)' }}>
            <Card.Title style={{ backgroundColor: 'rgb(0, 18, 25)' }}>This is About us page!</Card.Title>
            <Card.Text style={{ backgroundColor: 'rgb(0, 18, 25)' }}>
              Going along with the same storytelling theme, BRADY capitalizes on the effect that telling a story—with its own angle and personality—can create for a brand.

              Everything on its About Us page—from the simple black-and-white format to the images—screams quality and innovation. As you craft your About Us story, consider infusing it with your brand personality by using different branding elements. Bonus points if you can sprinkle in reasons why your customers should trust your brand over others. To illustrate, BRADY states its focus is on producing the world’s “finest performance brand.”

              BRADY’s About Us page goes on to explain why its valuable: “Our fabrics and materials fuse natural elements with cutting-edge technology. Designed with the body in mind.”

              Do the same and your About Us page has already done half its job.
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  )
}

export default AboutUs
