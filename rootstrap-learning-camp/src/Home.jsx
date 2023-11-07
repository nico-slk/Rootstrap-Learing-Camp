import { useContext } from "react"
import { CounterContext } from './contexts/CounterContext'

export const Home = () => {
    const { counter, setCounter } = useContext(CounterContext)
    return (
        <div>
            {counter}
            <input
                type="button"
                value="Counter + 1"
                onClick={() => setCounter(counter + 1)}
            />
            <input
                type="button"
                value="Counter - 1"
                onClick={() => setCounter(counter - 1)}
            />
            <input
                type="button"
                value="Reset"
                onClick={() => setCounter(0)}
            />
        </div>
    )
}
