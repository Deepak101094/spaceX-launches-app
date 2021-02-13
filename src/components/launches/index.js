import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WithLayout from "../../hoc/WithLayout";
import "../../styles/Launches.css";
import fetchLaunches from "../../store/action/Launches";
import Launch from "./Launch";
import LaunchDetail from "./LaunchDetail";

const Launches = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state?.Launches?.payload ?? {});
  console.log(launches);
  const { data, isLoading, success, errMsg } = launches || {};

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {(data || []).map((launch) => {
          const {
            flight_number,
            mission_name,
            launch_success,
            details,
            links: { flickr_images, mission_patch },
            rocket: {rocket_name}
          } = launch || {};
          return (
            <>
            <Launch
              key={flickr_images}
              flickr_images={flickr_images}
              mission_patch={mission_patch}
              mission_name={mission_name}
              launch_success={launch_success}
              rocket_name={rocket_name}
              flight_number={flight_number}
            />
            <LaunchDetail launch={launch} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WithLayout(Launches);
