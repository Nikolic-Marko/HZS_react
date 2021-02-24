import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./component/Homepage";
import Forum from "./component/Forum/Forum";
import ForumPitanja from "./component/Forum/ForumPitanja/ForumPitanja";
import PitanjaStranica from "./component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica";
import Prijava from "./component/Prijava/Prijava";

function App() {
<<<<<<< HEAD

  return (

    <BrowserRouter basename="/">
      <Switch>
        <Route path="/2020" exact component={Homepage} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/forum/pitanja" exact component={ForumPitanja} />
        <Route path="/forum/takmicenja" exact component={ForumPitanja} />
        <Route path="/forum/ostalo" exact component={ForumPitanja} />
        <Route path="/forum/ostalo/:id" exact component={PitanjaStranica} />
        <Route path="/prijava"exact component={Prijava} />
      </Switch>
    </BrowserRouter>
  )
=======
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/" component={Homepage} />
                <Route path="/forum" component={Forum} />
                <Route path="/forum/pitanja" component={ForumPitanja} />
                <Route path="/forum/takmicenja" component={ForumPitanja} />
                <Route path="/forum/ostalo" component={ForumPitanja} />
                <Route path="/forum/ostalo/:id" component={PitanjaStranica} />
                <Route path="/prijava" component={Prijava} />
            </Switch>
        </BrowserRouter>
    );
>>>>>>> d1b476f9a326f70d092fca80ffd9d519a5518a9c
}

export default App;
