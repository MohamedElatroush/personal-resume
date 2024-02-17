import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Projects = () => {
  return (
    <div className='container' style={{"display": "flex", 'justifyContent': 'center'}}>
      <CardGroup>
      <Card style={{marginRight: "10px"}}>
        <Card.Img variant="top" src='../../assets/images/noce-project.png' />
        <Card.Body>
          <Card.Title>Dashboard Activity Logging System</Card.Title>
          <Card.Text>
            Soon...
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{marginRight: "10px"}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Soon...
          </Card.Text>
        </Card.Body>

      </Card>
      <Card style={{marginRight: "10px"}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Soon...
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
    </div>
  )
}

export default Projects