type CounterPropType = {
    counterValue: number,
    counterHandler: () => void
}
// interface CounterPropType {
//     counterValue: number,
//     counterHandler: () => void
// }
const Counter = (props: Readonly<CounterPropType>) => {
    console.log('Counter rendered');
    //props.counterValue = props.counterValue + 1
    return (
        <>
            <span>Counter: &nbsp; {props.counterValue}</span>
            <br />
            <button type="button" onClick={props.counterHandler}>Increase</button>
        </>
    )
}

export default Counter