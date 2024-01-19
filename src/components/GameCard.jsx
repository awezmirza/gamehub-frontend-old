import { Link } from "react-router-dom";
import "../styles/gamecard.css"

const GameCard = ({ data }) => {
    return (
        <>
            <Link to={data.slug} className="gamecardlinks">
                <div className='game-card'>
                    <img src={"https://th.bing.com/th/id/OIP.FuuB8VIaiUa7fK6XnF_VxwHaHa?rs=1&pid=ImgDetMain"} alt={data.name} />
                    <h1>{data.name}</h1>
                    <div> {data.isLive ? "Click to play" : "Coming soon"} </div>
                </div>
            </Link>
        </>
    )
}

export default GameCard;