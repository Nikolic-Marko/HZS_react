import React from "react";
import "../css/Dot.css";

function Dot(props) {
    return (
        <a onClick={() => ScrollToElement(props.scrollAddress)}>
            <span className={"dot tooltip"}>
                <span className="tooltiptext">{props.tooltipText}</span>
            </span>
        </a>
    );
}

function ScrollToElement(id) {
    let elem = document.querySelector(id);
    elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
}

export default Dot;
