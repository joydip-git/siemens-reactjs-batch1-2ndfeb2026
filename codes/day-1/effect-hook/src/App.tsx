import { useState } from "react"
import Counter from "./Counter"
import Person from "./Person"

const App = () => {

  const [counter, setCounter] = useState(0)
  const [nameValue, setNameValue] = useState('')
  
  const [show, setShow] = useState(true)

  const increaseHandler = () => {
    setCounter(
      (current) => current + 1
    )
  }
  const nameHandler = (newName: string) => {
    setNameValue(newName)
  }
  return (
    <>
      <div>
        <button type="button" onClick={
          () => setShow((current) => !current)
        }>
          {show ? 'Hide' : 'Show'}
        </button>
        <br />
        {
          show && <Counter counterValue={counter} counterHandler={increaseHandler} />
        }
        <br />
        <br />
        <span>Received:{nameValue}</span>
        <Person personName={nameValue} updateNameHandler={nameHandler} />
      </div>
    </>
  )
}

export default App