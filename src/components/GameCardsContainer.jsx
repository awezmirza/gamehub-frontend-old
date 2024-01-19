import React, { useEffect, useState } from 'react'
import DummyData from "../dummy-data/dummydata.json"
import GameCard from './GameCard';
import "../styles/gamecardcontainer.css";

const GameCardsContainer = () => {
    const [data, setData] = useState()
    useEffect(() => {
        setData(DummyData)
    }, []);
    return (
        <>
            <div className='game-cards-container'>
                {data ? data.map((games) => <GameCard data={games} key={games.name} />) : "Not Hi"}
            </div>
        </>
    )
}

export default GameCardsContainer