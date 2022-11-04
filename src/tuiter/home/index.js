import React from "react";
import PostList from "./PostList";
import "./index.css";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            {/*<PostList/>*/}
            <h4 className="ms-4">Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;