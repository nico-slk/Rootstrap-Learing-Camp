import { useContext } from "react"
import { CounterContext } from './contexts/CounterContext'

export const Home = () => {
    const { counter, setCounter } = useContext(CounterContext)
    return (
        <div className=" flex flex-col items-center h-full">
            <p className="text-9xl mt-5">
                {counter}
            </p>
            <div className="flex flex-row w-full mt-24 justify-evenly">
                <input
                    type="button"
                    value="Counter + 1"
                    onClick={() => setCounter(counter + 1)}
                    className="flex flex-col w-48 border-2 border-white h-16 bg-blue-700 hover:bg-blue-500 opacity-80 transition-colors rounded-lg text-lg"
                />
                <input
                    type="button"
                    value="Counter - 1"
                    onClick={() => setCounter(counter - 1)}
                    className="flex flex-col w-48 border-2 border-white h-16 bg-rose-700 hover:bg-rose-600 opacity-80 transition-colors rounded-lg text-lg"
                />
                <input
                    type="button"
                    value="Reset"
                    onClick={() => setCounter(0)}
                    className="flex flex-col w-48 border-2 border-white h-16 hover:bg-slate-700 opacity-80 transition-colors rounded-lg text-lg"
                />
            </div>
        </div>
    )
}
