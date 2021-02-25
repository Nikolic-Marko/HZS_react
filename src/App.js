import React from 'react'
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Homepage from './component/Homepage'
import Forum from './component/Forum/Forum'
import ForumPitanja from './component/Forum/ForumPitanja/ForumPitanja'
import PitanjaStranica from './component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica'
import Prijava from './component/Prijava/Prijava'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/2021" exact component={Homepage} />
        <Route path="/2021/forum" exact component={Forum} />
        <Route path="/2021/forum/pitanja" exact component={ForumPitanja} />
        <Route path="/2021/forum/takmicenja" exact component={ForumPitanja} />
        <Route path="/2021/forum/ostalo" exact component={ForumPitanja} />
        <Route path="/2021/forum/ostalo/:id" exact component={PitanjaStranica} />
        <Route path="/2021/prijava" exact component={Prijava} />
      </Switch>
    </HashRouter>
  )
}

export default App
