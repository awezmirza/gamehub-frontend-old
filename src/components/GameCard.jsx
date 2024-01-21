import { Link } from "react-router-dom";
import "../styles/gamecard.css"

const GameCard = ({ data }) => {
    return (
        <>
            <Link to={data.slug} className="gamecardlinks">
                <div className='game-card'>
                    <div className="image-container">
                        <img src={data.src} alt={data.name} />
                    </div>
                    <h1>{data.name}</h1>
                    <div> {data.isLive ? "Click to play" : "Coming soon"} </div>
                </div>
            </Link>
        </>
    )
}

export default GameCard;