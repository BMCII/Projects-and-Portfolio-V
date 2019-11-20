import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selection from './componants/Selection';
import Test from './componants/Test';



class App extends Component {

  //creates state
  state = {
    selected: false,
    difficulty: '',
    amount: '',
    category: ''
  }

  //brings data object from Selection.js and sets state to user input
  loadTest = (dataObject) => {
    console.log('load test', dataObject)
    this.setState(dataObject)
    this.setState({selected: true})
  }

  scoreTest = () => {

  }

  render(){
    return (
      <div className="App">
        {this.state.selected ? 
          <Test difficulty={this.state.difficulty} amount={this.state.amount} category={this.state.category}/> : 
          <Selection formSubmit={this.loadTest} 
        />}
      </div>
    );
  }
}

export default App;
