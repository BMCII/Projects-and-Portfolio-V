import React from 'react'
import Questions from './Questions'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

class Test extends React.Component {

  //sets state
  state = {
    questions: []
  }

  buttonClick = () => {
    console.log('button clicked');       
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
        <Questions questions={this.state.questions} />
          <Col md={{ span: 6, offset: 3 }}>
            <Button onClick={this.buttonClick} variant="primary" size="lg" block>
              Score Test
            </Button>
          </Col>
      </div>
    );
  }
};



export default Test