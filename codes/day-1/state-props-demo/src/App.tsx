import { useState } from "react"
import Counter from "./Counter";

const App = () => {
  console.log('App rendered...');
  const [counterState, setCounterState] = useState(0)
  const increaseHandler = () => {
    console.log(counterState);
    // setCounterState(100)
    setCounterState(
      (currentState) => {
        return currentState + 1
      }
    )
    console.log(counterState);
  }

  // const counterComp = Counter({ counterValue: counterState, counterHandler: increaseHandler })
  return (
    <div>
      <Counter counterValue={counterState} counterHandler={increaseHandler}/>
      {/* {
        counterComp
      } */}      
    </div>
  )
}

export default App