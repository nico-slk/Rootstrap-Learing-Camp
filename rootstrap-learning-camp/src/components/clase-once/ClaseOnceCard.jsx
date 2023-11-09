/* eslint-disable react/prop-types */

export const ClaseOnceCard = ({ playedBy, name, aliases }) => {
    return (
        <div className="">
            <p>Name: {name || "NAME UNKNOW"}</p>
            <p>Alias: {aliases || "ALIAS UNKNOW"}</p>
            <p>Played by: {playedBy || "PLAYED BY UNKNOW"}</p>
        </div>
    )
}
