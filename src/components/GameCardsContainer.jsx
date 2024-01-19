import React, { useEffect, useState } from 'react'
import DummyData from "../dummy-data/dummydata.json"
import GameCard from './GameCard';
import "../styles/gamecardcontainer.css";
import { useDispatch, useSelector } from 'react-redux';
import { setGameData } from '../config/gameDataSlice';

const GameCardsContainer = () => {

    const data = useSelector((state) => state.gameDataSlice.value)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setGameData(DummyData))
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