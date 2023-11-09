import { useContext, useEffect, useState } from "react"
import { ClaseOnceContext } from "./ClaseOnceContext"
import { Services } from "../../service/services"
import { ClaseOnceCard } from "./ClaseOnceCard"


export const ClaseOnce = () => {
    const [state, setState] = useState({})
    const { characters, setCharacters } = useContext(ClaseOnceContext)

    useEffect(() => {
        Services.getCharacters(state.page || 1, state.size || 10)
            .then(res => setCharacters(res))
    }, [])

    return (
        <div className="border-2 ">
            <div className="flex flex-row justify-stretch">

                <label className=" w-full m-5" htmlFor="page">
                    <p>Select page</p>
                    <input
                        type="number"
                        name="page"
                        className="text-white w-full mt-2 bg-slate-700 p-2 rounded-xl"
                        placeholder="Page"
                        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                    />
                </label>
                <label className=" w-full m-5" htmlFor="size">
                    <p>Select size</p>
                    <input
                        type="number"
                        name="size"
                        placeholder="Size"
                        className="text-white w-full mt-2 bg-slate-700 p-2 rounded-xl"
                        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                    />
                </label>
                <input
                    type="button"
                    value="Apply"
                    className="text-white border-2 border-slate-600 w-full m-5 hover:border-slate-500 hover:bg-slate-700 rounded-xl active:bg-slate-300 active:text-slate-700 transition-colors"
                    onClick={(e) => {
                        e.preventDefault()
                        Services.getCharacters(state.page, state.size)
                            .then(res => setCharacters(res))
                    }}
                />
            </div>
            <div className="flex flex-row flex-wrap pt-10 pb-10 ">
                {
                    characters?.map(
                        (character, index) =>
                            <div key={character.url} className="flex flex-col w-1/3 h-40 columns-3 p-5 ">
                                <div className="border-2 border-slate-600 pt-4 pl-4 pr-4 pb-6 hover:bg-slate-600 rounded transition-colors">
                                    <h3>{index + 1}</h3>
                                    <ClaseOnceCard
                                        playedBy={character.playedBy[0]}
                                        name={character.name}
                                        aliases={character.aliases[0]}
                                    />
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}