import React from "react";
import "../css/Dot.css";

function Dot(props) {
    return (
        <a href={"#" + props.scrollAddress}>
            <span className={"dot tooltip"}>
                <span className="tooltiptext">{props.tooltipText}</span>
            </span>
        </a>
    );
}

export default Dot;
