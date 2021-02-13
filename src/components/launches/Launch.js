import React from "react";
import { useDispatch } from "react-redux";
import fetchLaunches from "../../store/action/Launches";
import fetchLaunchDetail from "../../store/action/LaunchesDetail";

const Launch = ({
  flickr_images,
  mission_name,
  mission_patch,
  launch_success,
  rocket_name,
  flight_number
}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        {flickr_images.length > 0 ? (
          <img
            src={flickr_images}
            loading="lazy"
            className="card-img-top"
            alt={mission_name}
          />
        ) : (
          <img
            src={mission_patch}
            loading="lazy"
            className="card-img-top"
            alt={mission_name}
          />
        )}
        {/* <video autoPlay={true} loop muted>
                  <source src={video_link} type="video/mp4"></source>
               </video> */}
        <div className="card-body">
          <h5 className="card-title"> {mission_name} </h5>
          <div className="card-text">
            <div className="success">
              <span>
                <b>Successful </b>
              </span>
              <span> {launch_success ? "Yes" : "No"} </span>
            </div>
            <div className="success">
              <span>
                <b>Rocket Name </b>
              </span>
              <span> {rocket_name} </span>
            </div>
          </div>
          <a     
           href="#"      
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#popup${flight_number}`}
          >
            view more details
            </a>
        </div>
       
      </div>
    </div>
  );
};

export default Launch;
