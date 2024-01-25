import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

// Dispatching API Call for gamedata 
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setGameData } from "../config/gameDataSlice";
import { addUserData } from "../config/userDataSlice";
import DummyData from "../dummy-data/dummydata.json"
import UserData from "../dummy-data/currentUserDummyData.json"

const LayoutRoot = () => {

    const dispatch = useDispatch();
    const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = DummyData;
            dispatch(setGameData(data))
            setIsLoading(false);
        }

        // Fetching User Data 
        const fetchUserData = async () => {
            dispatch(addUserData(data))
            setIsLoading(false);
        }

        const data = UserData;
        fetchData();
        if (data) {
            fetchUserData();
        }
        // eslint-disable-next-line
    }, []);

    return <>
        <Header />
        {IsLoading ?
            <>
                <div className="loading-anim">
                    <iframe src="https://lottie.host/embed/b1e7f0ad-f196-4954-a959-46ff17979879/FgPMUOQ7Vc.lottie" title="lottie-anim-loading" id="lottie-anim-loading"></iframe>
                </div>
            </> : <Outlet />}
        <Footer />
    </>
}

export default LayoutRoot