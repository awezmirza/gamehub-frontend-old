import React from 'react'
import GameCard from './GameCard';
import "../styles/gamecardcontainer.css";
import { useSelector } from 'react-redux';

const GameCardsContainer = () => {

    const data = useSelector((state) => state.gameDataSlice.value)

    return (
        <>
            <div className='game-cards-container'>
                {data ? data.map((games) => <GameCard data={games} key={games.name} />) : ""}
            </div>
        </>
    )
}

export default GameCardsContainer