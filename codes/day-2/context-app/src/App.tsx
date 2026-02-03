import { useState } from "react"
import Panel from "./Panel"
import { CounterContext, type ContextValueType } from "./counter-context"

const App = () => {
  const [counterState, setCounterState] = useState(0)
  const counterHandler = () => {
    setCounterState(
      (current) => current + 1
    )
  }

  const contextData: ContextValueType = {
    handler: counterHandler,
    count: counterState
  }
  return (
    <CounterContext.Provider value={contextData}>
      <div>
        <Panel />
      </div>
    </CounterContext.Provider>
  )
}

export default App