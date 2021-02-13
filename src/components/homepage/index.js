import React from "react";
import { useHistory } from "react-router-dom";
import withLayout from "../../hoc/WithLayout";
import "../../styles/Homepage.css";
import "../../styles/Loader.css";

const Homepage = () => {
  const [loader, setLoader] = React.useState(false);
  const history = useHistory();

  // const seeLaunchesHandler = () => {
  //    setLoader(true)
  //    setTimeout( () => {
  //        history.push("/launches")
  //    }, 1000);
  // }

  return (
    <div className="homepage">
      <div className="hero_text">
        <div style={{ marginBottom: "8px" }}>
          Space Exploration Technologies Corp., trading as SpaceX, is an
          American aerospace manufacturer and space transportation services
          company headquartered in Hawthorne, California. It was founded in 2002
          by Elon Musk with the goal of reducing space transportation costs to
          enable the colonization of Mars.
        </div>
        {loader ? (
          <div className="loader"> Loading... </div>
        ) : (
          <button
            className="button"
            onClick={() => {
               setLoader(true)
              history.push("/launches");
            }}
           // onClick={seeLaunchesHandler}
          >
            See Launches
          </button>
        )}
      </div>
    </div>
  );
};

export default withLayout(Homepage);
