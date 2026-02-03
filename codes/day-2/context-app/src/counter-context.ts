import { createContext } from "react";

export type ContextValueType = {
    count: number,
    handler: () => void
}
export const CounterContext = createContext<ContextValueType>({
    count: 0,
    handler: () => { }
})