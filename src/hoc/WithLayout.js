import React from "react";
import Navbar from "../components/navbar";

const withLayout = (wrapperComponent) => {
    return (props) => {
        return (
            <div>
                <Navbar />
                <wrapperComponent {...props} />
            </div>
        );
    }
}
export default withLayout;