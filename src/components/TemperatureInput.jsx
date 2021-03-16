import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'

class TemperatureInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      temperature:''
    }
  }

  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      temperature: value
    })
  }

  render() {

    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <div>
      <fieldset>
      <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
      <input        
        value={temperature}
        onChange={e => this.handleChange(e)} />
      </fieldset>
      <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    )
  }
}

export default TemperatureInput
