import React from 'react'
import Questions from './Questions'

class Test extends React.Component {

    state = {
      questions: []
    }
  
    componentDidMount() {
  
      // url variables
  let amount = 10;
  let category = 15;
  let difficulty = 'easy';
  let type = 'multiple';
  
  //url
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  
      
      fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ questions: data.results })
      })
      .catch(console.log)
    }
  
    render () {
      return (
  <Questions questions={this.state.questions} />
      );
    }
  };

export default Test