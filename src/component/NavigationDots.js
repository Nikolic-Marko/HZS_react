import React from "react";
import Dot from "./Dot.js";
import "../css/Dot.css";

function NavigationDots(props) {
    return (
        <ul className="NavigationDots">
            <li>
                <Dot scrollAddress="#home" tooltipText="Početna" />
            </li>
            <li>
                <Dot scrollAddress="#about" tooltipText="O nama" />
            </li>
            <li>
                <Dot scrollAddress="#timeline" tooltipText="Vremenska linija" />
            </li>
            <li>
                <Dot scrollAddress="#team" tooltipText="Naš tim" />
            </li>
            <li>
                <Dot
                    scrollAddress="#najcesca-pitanja"
                    tooltipText="Najčešća pitanja"
                />
            </li>
            <li>
                <Dot scrollAddress="#partners" tooltipText="Partneri" />
            </li>
        </ul>
    );
}

export default NavigationDots;
