import React from "react";
import Navbar from "../components/navbar";

const withLayout = (InputComponent) => {
    return (props) => {
        return (
            <div>
                <Navbar />
                <InputComponent {...props} />
            </div>
        );
    }
}
export default withLayout;