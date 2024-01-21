// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import GamePageCard from '../components/GamePageCard';
import Leaderboard from '../components/Leaderboard';

const GamePage = () => {
    const { gameslug } = useParams();

    const gameData = useSelector((state) => state.gameDataSlice.value).find(item => item.slug === gameslug);
    console.log(gameData)

    if (gameData === undefined) {
        return <> <h1>Game Not Found!</h1> </>
    }

    return (
        <div>
            {gameData ? <GamePageCard data={gameData}/> : "Not Hi"}
            <Leaderboard />
        </div>
    )
}

export default GamePage