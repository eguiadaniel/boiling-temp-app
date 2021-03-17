import React, { Component } from 'react'


class TemperatureInput extends Component {

  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  handleChange = (e) => {
    const value = e.target.value;
    // this.setState({
    //   temperature: value
    // })
    this.props.onTemperatureChange(value)
  }
  

  render() {

    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <div>
      <fieldset>
      <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
      <input        
        value={temperature}
        onChange={e => this.handleChange(e)} />
      </fieldset>
      
      </div>
    )
  }
}

export default TemperatureInput
