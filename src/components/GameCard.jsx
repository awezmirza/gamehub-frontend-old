import "../styles/gamecard.css"

const GameCard = ({ data }) => {
    return (
        <>
            <div className='game-card'>
                <img src={"https://th.bing.com/th/id/OIP.FuuB8VIaiUa7fK6XnF_VxwHaHa?rs=1&pid=ImgDetMain"} alt={data.name} />
                <h1>{data.name}</h1>
                <div> {data.isLive ? "Click to play" : "Coming soon"} </div>
            </div>
        </>
    )
}

export default GameCard;