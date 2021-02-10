import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import WithLayout from "../../hoc/WithLayout";
import "../../styles/Launches.css";

const index = () => {
    return (
        <div className="launches_screen">
        </div>
    )
}

export default WithLayout(index);
