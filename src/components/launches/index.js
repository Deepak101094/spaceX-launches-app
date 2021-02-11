import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import WithLayout from "../../hoc/WithLayout";
import "../../styles/Launches.css";
import fetchLaunches from "../../store/action/Launches";

const Launches = () => {
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(fetchLaunches())
    },[])

    return (
        <div className="launches_screen">

        </div>
    );
}

export default Launches;
