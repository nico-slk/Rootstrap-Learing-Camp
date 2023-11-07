/* eslint-disable react/prop-types */

export const ClaseOnceCard = ({ playedBy, name, aliases }) => {
    return (
        <div>
            <p>{playedBy}</p>
            <p>{name}</p>
            <p>{aliases}</p>
        </div>
    )
}
