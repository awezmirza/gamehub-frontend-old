import React from 'react'
import Carousel from './Carousel'
import "../styles/gamepagecard.css"
import StarRating from './StarRating';

const GamePageCard = ({ data }) => {

    const stars = document.querySelectorAll('svg');
    stars.forEach((star, i) => {

        star.addEventListener('click', () => {
            resetStars()
            for (let j = 0; j <= i; j++) {
                stars[j].style.fill = "yellow";
            }
        })
    })

    function resetStars() {
        stars.forEach((star, i) => {
            star.style.fill = "black";
        })
    }

    return (
        <><div>
            <div className="carasoulContainer">
                <Carousel />
            </div>
            <div className='game-data-style'>
                <div>
                    <h1 className='game-name'>
                        {data.name}
                    </h1>
                    <h4 className='game-description'>
                        {data.description}
                    </h4>
                </div>
                <StarRating />
            </div>
        </div>
        </>
    )
}

export default GamePageCard