import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selection from './componants/Selection';
import Test from './componants/Test';
import Results from './componants/Results';


class App extends Component {
  

  state = {
    selected: false
  }

  loadTest = () => this.setState({selected: true})

  render(){
  return (
    <div className="App">
      {this.state.selected ? <Test /> : <Selection />}
<button onClick={this.selected}>Load Test</button>
    </div>
  );
}
}

export default App;
