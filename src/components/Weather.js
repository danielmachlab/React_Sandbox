import React from 'react'

class Weather extends React.Component {
  render() {
    return <h1>It is {this.props.temp} degrees outside</h1>;
  }
}

export default Weather