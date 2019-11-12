import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selection from './componants/Selection';
import Test from './componants/Test';
import Results from './componants/Results';
import Col from 'react-bootstrap/Col'


class App extends Component {
  

  state = {
    selected: false
  }

  loadTest = () => this.setState({selected: true})

  render(){
  return (
    <div className="App">
      {this.state.selected ? <Test /> : <Selection />}
      <Col md={{ span: 6, offset: 3 }}>
      <Button onClick={this.loadTest} variant="primary" size="lg" block>
    Load Test
  </Button>
  </Col>
    </div>
  );
}
}

export default App;
