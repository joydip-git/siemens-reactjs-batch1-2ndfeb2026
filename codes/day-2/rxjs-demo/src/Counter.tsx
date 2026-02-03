import { useEffect, useState } from "react"
import CounterStore from "./counter-storage"
import type { Subscription } from "rxjs"

const Counter = () => {

  const [count, setCount] = useState(0)
  useEffect(
    () => {
      const sub: Subscription = CounterStore
        .storeObservable
        .subscribe(
          (data) => setCount(data)
        )

      return () => sub.unsubscribe()
    },
    []
  )

  return (
    <div>
      <span>in Counter child component - Counter:&nbsp;{count}</span>     
    </div>
  )
}

export default Counter