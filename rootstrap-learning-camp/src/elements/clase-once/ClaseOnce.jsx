import { useContext, useEffect, useState } from "react"
import { ClaseOnceContext } from "./ClaseOnceContext"
import { Services } from "../../service/services"
import { Link } from "react-router-dom"
import { ClaseOnceCard } from "./ClaseOnceCard"


export const ClaseOnce = () => {
    const [state, setState] = useState({})
    const { characters, setCharacters } = useContext(ClaseOnceContext)
    useEffect(() => {
        Services.getCharacters(state.page || 1, state.size || 10)
            .then(res => setCharacters(res))
    }, [])

    return (
        <div>
            <div className="clase-once-form">
                <Link to={'/'} className="item">App</Link>
                <input type="number" name="page" className="item" onChange={e => setState({ ...state, [e.target.name]: e.target.value })} />
                <input type="number" name="size" className="item" onChange={e => setState({ ...state, [e.target.name]: e.target.value })} />
                <input type="button" value="Apply" className="item" onClick={(e) => {
                    e.preventDefault()
                    Services.getCharacters(state.page, state.size)
                        .then(res => setCharacters(res))
                }} />
            </div>
            {
                characters?.map(
                    (character, index) =>
                        <div key={character.url} className="card">

                            <h3>{index + 1}</h3>
                            <ClaseOnceCard
                                playedBy={character.playedBy[0]}
                                name={character.name}
                                aliases={character.aliases[0]}
                            />

                        </div>
                )
            }
        </div>
    )
}
