import { useEffect } from "react"

type CounterPropType = {
    counterValue: number,
    counterHandler: () => void
}
const Counter = ({ counterHandler, counterValue }: Readonly<CounterPropType>) => {


    useEffect(
        //effect function
        () => {
            console.log('will be executed always');

            return () => {
                console.log('will cleanup always except the very first time and next time onwards at the beginnng'); 
            }
        }
    )

    useEffect(
        //effect function
        () => {
            console.log('will be executed only when counter value changes');
            return () => {
                console.log('will cleanup in next re-render when counter value changes');
            }
        },
        [counterValue]
    )

    useEffect(
        () => {
            const x = 10
            console.log('will be executed ONLY one time');
            return () => {
                console.log(x);
                console.log('will cleanup in when the component is unmounted...');
            }
        },
        []
    )

    console.log('returning');
    return (
        <div>
            <span>Counter: &nbsp;{counterValue}</span>
            <br />
            <button type="button" onClick={counterHandler}>Increase</button>
        </div>
    )
}

export default Counter