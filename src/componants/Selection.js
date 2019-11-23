import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'



class Selection extends React.Component {

  //sets state
  constructor(props){
    super(props);
    this.state = { 
      category: '24', 
      amount: '10', 
      difficulty: 'easy' 
    };
  }

  //changes state to user input   
  handleChange = ({ target }) => {
   this.setState({ [target.name]: target.value }); 
  };

  //puts state into data object
  buttonClick = () => {
    console.log('button clicked');
    let data = {
      difficulty:this.state.difficulty, 
      amount:this.state.amount, 
      category:this.state.category
    }
    this.props.formSubmit(data)       
  }
     
  render() {
    return (
      <Container>
        <h1>Select Your Test</h1>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label htmlFor="subject">Subject:</Form.Label>
          <Form.Control as='select'
            name="category" 
            id="catigory"
            value={this.state.category}
            onChange={this.handleChange}
            >
            <option value="24">Politics</option>
            <option value="23">History</option>
            <option value="22">Geography</option>
            <option value="12">Music</option>
            <option value="21">Sports</option>
            <option value="27">Animals</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
          <label htmlFor="questions">Questions:</label>
          <Form.Control as='select' 
            name="amount" 
            id="amount"
            value={this.state.amount}
            onChange={this.handleChange}
            >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
          <label htmlFor="difficulty">Difficulty:</label>
          <Form.Control as='select' 
            name="difficulty" 
            id="difficulty"
            ref="difficulty"
            value={this.state.difficulty}
            onChange={this.handleChange}
            >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </Form.Control>
          </Form.Group>

          <Col md={{ span: 6, offset: 3 }}>
            <Button onClick={this.buttonClick} variant="primary" size="lg" block>
              Load Test
            </Button>
          </Col>


        </Form>
        </Card.Body>
        </Card>
        </Col>

        


        </Row>
        </Container>
    );
  }
}

export default Selection;