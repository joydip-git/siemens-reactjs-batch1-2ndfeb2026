type CounterPropType = {
    counterValue: number,
    increaseCounter: () => void,
    decreaseCounter: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
    return (
        <>
            <span>Counter: &nbsp; {props.counterValue}</span>
            <br />
            <button type="button" onClick={props.increaseCounter}>Increase</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={props.decreaseCounter}>Decrease</button>
        </>
    )
}

export default Counter