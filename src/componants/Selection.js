import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'



class Selection extends React.Component {

  //sets state
  constructor(props){
    super(props);
    this.state = { 
      category: '19', 
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
      <div className=''>
        <h1>Selection</h1>
        <form>
          <label htmlFor="subject">Subject:</label>
          <select 
            name="category" 
            id="catigory"
            value={this.state.category}
            onChange={this.handleChange}
            >
            <option value="19">Math</option>
            <option value="23">History</option>
            <option value="22">Geography</option>
            <option value="12">Music</option>
          </select>
          <label htmlFor="questions">Questions:</label>
          <select 
            name="amount" 
            id="amount"
            value={this.state.amount}
            onChange={this.handleChange}
            >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label htmlFor="difficulty">Difficulty:</label>
          <select 
            name="difficulty" 
            id="difficulty"
            ref="difficulty"
            value={this.state.difficulty}
            onChange={this.handleChange}
            >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <Col md={{ span: 6, offset: 3 }}>
            <Button onClick={this.buttonClick} variant="primary" size="lg" block>
              Load Test
            </Button>
          </Col>
        </form>
      </div>
    );
  }
}

export default Selection;