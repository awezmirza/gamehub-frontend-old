import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

// Dispatching API Call for gamedata 
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setGameData } from "../config/gameDataSlice";
import { addUserData } from "../config/userDataSlice";

import { SERVER_URL } from "../utils/constant";

const LayoutRoot = () => {

    const dispatch = useDispatch();
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            // Getting Game data and Updating it in RTK
            const fetchData = () => {
                fetch(`${SERVER_URL}/api/get-game-data`)
                    .then(res => res = res.json())
                    .then(res => dispatch(setGameData(res)))
                    .then(_ => setIsLoading(false))
                    .catch(err => { console.log(err); return false })
            }

            // Setting User Data 
            const fetchUserData = () => {
                fetch(`${SERVER_URL}/api/get-user-data`)
                    .then(res => res = res.json())
                    .then(res => dispatch(addUserData(res)))
                    .catch(err => { console.log(err); return false })
            }
            fetchData();
            fetchUserData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return <>
        <Header />
        {IsLoading ?
            <>
                <div className="loading-anim">
                    <iframe src="https://lottie.host/embed/b1e7f0ad-f196-4954-a959-46ff17979879/FgPMUOQ7Vc.lottie" title="lottie-anim-loading" id="lottie-anim-loading"></iframe>
                </div>
            </> :
            <Outlet />}
        <Footer />
    </>
}

export default LayoutRoot