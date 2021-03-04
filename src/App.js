import React from 'react'
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Homepage from './component/Homepage'
import Forum from './component/Forum/Forum'
import ForumPitanja from './component/Forum/ForumPitanja/ForumPitanja'
import PitanjaStranica from './component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica'
import Prijava from './component/Prijava/Prijava'
import Radionice from './component/Forum/PojedinacneKategorije/Radionice/Radionice'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/forum/Radionice" exact component={Radionice} />
        <Route path="/forum/takmicenja" exact component={ForumPitanja} />
        <Route path="/forum/ostalo" exact component={ForumPitanja} />
        <Route path="/forum/ostalo/:id" exact component={PitanjaStranica} />
        <Route path="/forum/radionice/:id" exact component={PitanjaStranica} />
        <Route
          path="/forum/domaci%20zadatak/:id"
          exact
          component={PitanjaStranica}
        />
        <Route
          path="/forum/prezentovanje%20resenja/:id"
          exact
          component={PitanjaStranica}
        />
        <Route path="/forum/pravila/:id" exact component={PitanjaStranica} />
        <Route path="/prijava" exact component={Prijava} />
      </Switch>
    </HashRouter>
  )
}

export default App
