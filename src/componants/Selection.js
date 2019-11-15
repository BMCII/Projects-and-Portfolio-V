import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Test from './Test'

class Selection extends React.Component {
 
  
  constructor(props){
    super(props);
    this.state = { subject: 'math', questions: '10', difficulty: 'easy' };

  }
 
  handleChange = ({ target }) => {
     this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
  
    // url variables

    // const [amount, setAmount] = useState('')
let amount = 10;
// let category = 15;
let difficulty = 'easy';
let type = 'multiple';



//url
const url = `https://opentdb.com/api.php?amount=${amount}&category=${this.state.subject}&difficulty=${difficulty}&type=${type}`;

    
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ questions: data.results })
    })
    .catch(console.log)
  }

  render(){
  return (
    
    <div>
      <h1>Create Your Test</h1>
      <Container>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
<Form id='selectionForm'>
  <Form.Group controlId="selectionForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name" />
  </Form.Group>
  <Form.Group controlId="selectionForm.ControlSelect1">
    <Form.Label>Number of Questions</Form.Label>
    <Form.Control as="select">
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>
      <option>25</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="selectionForm.ControlSelect1">
    <Form.Label>Subject</Form.Label>
    <Form.Control 
    as="select"
    name="subject" 
    id="subject"
    ref={this.myRef}
    value={this.state.subject}
    onChange={this.handleChange}
    >
      <option>History</option>
      <option>Math</option>
      <option>Sports</option>
      <option>Music</option>
      <option>Television</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="selectionForm.ControlSelect1">
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
      <Test subject={this.state.subject}/>
    </div>
  )
}
};

export default Selection