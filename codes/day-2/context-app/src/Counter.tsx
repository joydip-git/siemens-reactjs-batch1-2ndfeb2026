import { useContext } from "react"
import { CounterContext } from "./counter-context"

const Counter = () => {

  const { count, handler } = useContext(CounterContext)

  return (
    <div>
      <span>Counter:&nbsp;{count}</span>
      <br />
      <button type="button" onClick={handler}>Increase</button>
    </div>
  )
}

export default Counter