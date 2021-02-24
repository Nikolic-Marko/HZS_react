import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./component/Homepage";
import Forum from "./component/Forum/Forum";
import ForumPitanja from "./component/Forum/ForumPitanja/ForumPitanja";
import PitanjaStranica from "./component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica";
import Prijava from "./component/Prijava/Prijava";

function App() {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/hello" exact component={Homepage} />
                <Route exact path="/forum" component={Forum} />
                <Route path="/forum/pitanja" component={ForumPitanja} />
                <Route path="/forum/takmicenja" component={ForumPitanja} />
                <Route path="/forum/ostalo" component={ForumPitanja} />
                <Route path="/forum/ostalo/:id" component={PitanjaStranica} />
                <Route path="/prijava" component={Prijava} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
