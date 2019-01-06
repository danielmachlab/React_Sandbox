import React from 'react'
import './ThatWasEasy.css'

class ThatWasEasy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false,
    }
  }

  handleClick(){
    this.setState({
      pressed: !this.state.pressed,
    })
  }
  
  render(){
    let btn_class = this.state.pressed ? "red_btn" : "green_btn";

    return(
      <button className={btn_class} onClick={() => this.handleClick()}>
        Press Me
      </button>
    )
  }

}

export default ThatWasEasy