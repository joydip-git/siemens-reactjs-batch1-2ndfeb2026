import { useReducer } from "react"
import Counter from "./Counter";
import { counterReducer, type CounterStateType } from "./counter-reducer";

const App = () => {
  const initialState: CounterStateType = {
    counter: 0
  }
  const [state, dispatch] = useReducer(counterReducer, initialState)
  
  const increaseHandler = () => {
    dispatch({ type: 'increase' })
  }
  const decreaseHandler = () => dispatch({ type: 'decrease' })
  return (
    <div>
      <Counter counterValue={state.counter} increaseCounter={increaseHandler} decreaseCounter={decreaseHandler} />
    </div>
  )
}

export default App