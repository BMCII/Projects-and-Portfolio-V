import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'


const Questions = ({ questions }) => {
  return (
    <div>
    <h1>Test Questions</h1>
      {questions.map((question) => (

<Container>

<Row>
  <Col md={{ span: 10, offset: 1 }}><Card>
  <Card.Body>
{question.question}
<div className="d-flex flex-column">


<ButtonGroup className="mt-3">
  <Button variant="secondary">{question.correct_answer}</Button>
  <Button variant="secondary">{question.incorrect_answers[0]}</Button>
  <Button variant="secondary">{question.incorrect_answers[1]}</Button>
  <Button variant="secondary">{question.incorrect_answers[1]}t</Button>
</ButtonGroup>

</div>

  </Card.Body>
</Card>
</Col>
</Row>
<br></br>

</Container>

))}
    </div>
  )
};

export default Questions