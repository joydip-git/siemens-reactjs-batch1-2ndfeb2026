import { useEffect, useState } from "react"
import Panel from "./Panel"
import CounterStore from "./counter-storage"

const App = () => {
  const [counterState, setCounterState] = useState(0)
  useEffect(
    () => CounterStore.publish(counterState)
  )
  const counterHandler = () => {
    setCounterState(
      (current) => {
        return current + 1
      }
    )
  }


  return (
    <div>
      <Panel />
      <br />
      <button type="button" onClick={counterHandler}>Increase</button>
    </div>
  )
}

export default App