import { BehaviorSubject } from "rxjs";

class CounterStorage {
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    publish(newvalue: number) {
        this.store.next(newvalue)
    }
    getValue() {
        return this.store.value
    }

    private static counter: CounterStorage | null = null;
    private constructor() {

    }
    static create() {
        if (this.counter === null)
            this.counter = new CounterStorage()

        return this.counter
    }
}

//const CounterStore = new CounterStorage()
const CounterStore = CounterStorage.create()
export default CounterStore