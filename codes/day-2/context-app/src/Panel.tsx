import { useState } from 'react'
import Counter from './Counter'
import { CounterContext } from './counter-context'

const Panel = () => {
    const [counterState, setCounterState] = useState(10)
    const counterHandler = () => {
        setCounterState(
            (current) => current - 1
        )
    }
    return (
        <CounterContext.Provider value={{ count: counterState, handler: counterHandler }}>
            <div>
                <Counter />
            </div>
        </CounterContext.Provider>
    )
}

export default Panel