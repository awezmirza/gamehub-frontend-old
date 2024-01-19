import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GamePage = () => {
    const { gameslug } = useParams();
    return (
        <div>
            {gameslug}
        </div>
    )
}

export default GamePage