import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const SelectionButton = () => {
    
  return (
      
    <div>
        <Row>
      <Col md={{ span: 10, offset: 1 }}>
      <Button onClick={this.loadTest} variant="primary" size="lg" block>
    Load Test
  </Button>
  </Col>
  </Row>
    </div>
  )
};

export default SelectionButton