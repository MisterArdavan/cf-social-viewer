import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-brand">{props.brandName}</div>
        </div>
    );
};

export default Navbar;
