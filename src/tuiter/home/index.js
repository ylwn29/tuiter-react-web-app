import React from "react";
import "./index.css";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h4 className="ms-4">Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;