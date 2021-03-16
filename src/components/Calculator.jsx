import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }  
  
  render() {

    return (
      <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
      
    )
  }
}

export default Calculator
