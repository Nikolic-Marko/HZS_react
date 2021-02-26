import React, { Component } from "react";
import "./AboutHakaton.css";
import slika1 from "./img/slika1.JPG";
import slika2 from "./img/slika2.JPG";
import slika3 from "./img/slika3.JPG";
import slika4 from "./img/slika4.JPG";
import slika5 from "./img/slika5.JPG";
import slika6 from "./img/slika6.JPG";
import slika7 from "./img/slika7.JPG";
import slika8 from "./img/slika8.JPG";
import slika9 from "./img/slika9.JPG";

class AboutHakaton extends Component {
    render() {
        return (
            <div className="aboutHakaton" id="about">
                <div className="leftSide">
                    <img src={slika1} alt="slika sa takmicenja" />
                    <img src={slika2} alt="slika sa takmicenja" />
                    <img src={slika3} alt="slika sa takmicenja" />
                    <img src={slika4} alt="slika sa takmicenja" />
                    <img src={slika5} alt="slika sa takmicenja" />
                    <img src={slika6} alt="slika sa takmicenja" />
                    <img src={slika7} alt="slika sa takmicenja" />
                    <img src={slika8} alt="slika sa takmicenja" />
                    <img src={slika9} alt="slika sa takmicenja" />
                </div>
                <div className="rightSide">
                    <div className="textSection">
                        <h1>O HAKATONU</h1>
                        <p>
                            Hakaton za srednjoškolce predstavlja takmičenje namenjeno
                            učenicima srednjih škola na teritoriji Srbije
                            koji su spremni da primene postojeća znanja u praksi
                            i nauče nešto novo u oblasti informacionih tehnologija.
                            Takmičenju prethodi selekcija koja se sastoji iz prijave,
                            online testa i radionica. Na samom takmičenju timovi
                            treba za 24 časa da kreiraju softversko rešenje na zadati problem
                            primenom znanja stečenog na radionicama i uz pomoć mentora.
                        </p>
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutHakaton;
