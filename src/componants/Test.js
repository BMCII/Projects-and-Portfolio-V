import React from 'react';
import Questions from './Questions';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Results from './Results';

class Test extends React.Component {

  //sets state
  state = {
    questions: [],
    score: 0,
    complete: false,
    count: 0
  }

  //puts test score into score object and loads Results.js
  testButtonClick = () => {
    console.log('button clicked'); 
    this.setState({complete: true}) 
    let score = {
      score:this.state.count
    }
    this.props.testSubmit(score)
    
    console.log('score',score)
  }

  increment(){
    this.setState({ counts : this.state.count + 1});
}

  //API call
  componentDidMount() {
    const url = `https://opentdb.com/api.php?amount=${this.props.amount}&category=${this.props.category}&difficulty=${this.props.difficulty}&type=multiple`;
      
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ questions: data.results })
      console.log(url,data.results)
    })
    .catch(console.log)
  }
  

  render () {
    return (
      <div className=''>
        {this.state.complete ? 
         <Results score={this.state.score} /> :
         <Questions score={this.state.score} questions={this.state.questions} count={this.state.count} increment={this.increment.bind(this)}/> 
        }      
      
          <Col md={{ span: 8, offset: 2 }}> 
            <Button onClick={this.testButtonClick} variant="primary" size="lg" block>
              Score Test
            </Button>
          </Col>
     
      </div>
    );
  }
};



export default Test