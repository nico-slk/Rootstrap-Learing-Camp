/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ClaseOnceContext = createContext()

export const ClaseOnceContextProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])
    return (
        <ClaseOnceContext.Provider value={{
            characters,
            setCharacters
        }} >
            {children}
        </ClaseOnceContext.Provider>
    )
}