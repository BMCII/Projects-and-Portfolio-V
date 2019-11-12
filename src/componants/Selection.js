import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Selection = () => {


  
  return (
    <div>
      <h1>Create Your Test</h1>
      <Container>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
<Form id='selectionForm'>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of Questions</Form.Label>
    <Form.Control as="select">
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>
      <option>25</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Subject</Form.Label>
    <Form.Control as="select">
      <option>History</option>
      <option>Math</option>
      <option>Sports</option>
      <option>Music</option>
      <option>Television</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Diffuculty</Form.Label>
    <Form.Control as="select">
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </Form.Control>
  </Form.Group>
</Form>
</Col>
</Row>


</Container>

    </div>
  )
};

export default Selection