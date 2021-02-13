import React from "react";
import moment from "moment";
import "../../styles/LaunchDetail.css";



const LaunchDetail = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    details,
    launch_date_local,
    launch_year,
    launch_site: { site_name },
    rocket: { rocket_name },
    links: { mission_patch_small, article_link, video_link, wikipedia },
  } = launch || {};

  return (
    <div
      className="modal fade modal"
      id={`popup${flight_number}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal_head_content">
              <img src={mission_patch_small} alt={mission_name} />
              <div>
                <h4 className="modal-title" id="exampleModalLabel">
                  {mission_name}
                </h4>
                <div className="icon">
                  <a href={article_link} target="_blank">
                    {" "}
                    <i className="bi bi-newspaper i_new"></i>
                  </a>
                  <a href={wikipedia} target="_blank">
                    {" "}
                    <i className="bi bi-file-word i_wiki"></i>{" "}
                  </a>
                  <a href={video_link} target="_blank">
                    {" "}
                    <i className="bi bi-youtube i_youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {details}
            ..
          </div>
          <div className="footer col-sm-12">
            <div className="modal-detail col-sm-6">
              <div className="item">
                <span className="font">Launch year</span>
                <span>{launch_year}</span>
              </div>
              <div className="item">
                <span className="font">Launch Date</span>
                <span>
                  {launch_date_local &&
                    moment(new Date(launch_date_local)).format("DD-MM-YYYY")}
                </span>
              </div>
            </div>

            <div className="modal-detail col-sm-6">
              <div className="item">
                <span className="font">Launch Site</span>
                <span>{site_name}</span>
              </div>
              <div className="item">
                <span className="font">Rocket Name</span>
                <span>{rocket_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetail;
