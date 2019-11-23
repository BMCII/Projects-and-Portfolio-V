import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selection from './componants/Selection';
import Test from './componants/Test';
import Navbar from 'react-bootstrap/Navbar'



class App extends Component {

  //creates state
  state = {
    selected: false,
    difficulty: '',
    amount: '',
    category: '',
  }

  //brings data object from Selection.js and sets state to user input
  loadTest = (dataObject) => {
    console.log('load test', dataObject)
    this.setState(dataObject)
    this.setState({selected: true})
  }

  //brings test score from Test.js
  scoreTest = (testScore) => {
    this.setState(testScore)
    console.log('Test Score',testScore);
  }

  testCount = (count) => {
    this.setState(count)
    console.log('count :', count)
  }

  render(){
    return (
      <div className="App">
        <Navbar bg='dark'></Navbar>
        {this.state.selected ? 
          <Test testCount={this.testCount} testSubmit={this.scoreTest} difficulty={this.state.difficulty} amount={this.state.amount} category={this.state.category}/> : 
          <Selection formSubmit={this.loadTest} 
        />}
        <Navbar bg='dark' fixed="bottom" ></Navbar>
      </div>
    );
  }
}

export default App;
