import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

// Dispatching API Call for gamedata 
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setGameData } from "../config/gameDataSlice";
import DummyData from "../dummy-data/dummydata.json"

const LayoutRoot = () => {

    const dispatch = useDispatch();
    const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = DummyData;
            dispatch(setGameData(data))
            setIsLoading(false);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    return <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Header />
        {IsLoading ? "Loading" : <Outlet />}
        <Footer />
    </>
}

export default LayoutRoot