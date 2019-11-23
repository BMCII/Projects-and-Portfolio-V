import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Results = (score) => {

  
  return (
    <Container>
      <h1>Score</h1>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body>
          <div>

<h2>You scored</h2>
<p>{score.score} %</p>
    </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br></br> 

  </Container>

  )
};

export default Results