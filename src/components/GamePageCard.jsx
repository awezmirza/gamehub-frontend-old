import React from 'react'
import Carousel from './Carousel'
import "../styles/gamepagecard.css"

const GamePageCard = ({ data }) => {

    return (
        <>
            <div className="carasoulContainer">
                <Carousel />
            </div>
            <div>{data.name}</div>
        </>
    )
}

export default GamePageCard