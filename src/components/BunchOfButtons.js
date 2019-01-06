import React from 'react'
import ThatWasEasy from './ThatWasEasy'

class BunchOfButtons extends React.Component{
  render(){
    const labs = ["haha", "click me", "frick", "this button cool"]
    const allTheEasies = labs.map((lab) => <ThatWasEasy label = {lab}/>);
    return(
      [allTheEasies]
    );
  }
}

export default BunchOfButtons