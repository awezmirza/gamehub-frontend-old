import React from 'react'
import Carousel from './Carousel'
import "../styles/gamepagecard.css"

const GamePageCard = ({ data }) => {

    return (
        <><div>
            <div className="carasoulContainer">
                <Carousel />
            </div>
            <div>
                Other Data
            </div>
        </div>
        </>
    )
}

export default GamePageCard