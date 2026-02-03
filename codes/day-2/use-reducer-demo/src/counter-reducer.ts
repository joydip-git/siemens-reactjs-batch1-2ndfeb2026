export type CounterStateType = {
    counter: number
}
export const counterReducer = (state: CounterStateType, action) => {
    switch (action.type) {
        case 'increase': return {
            ...state,
            counter: state.counter + 1
        }
        case 'decrease': return {
            ...state,
            counter: state.counter - 1
        }
        default: return {
            ...state
        }
    }
}