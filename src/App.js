import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Homepage from './component/Homepage'
import Forum from './component/Forum/Forum'
import ForumPitanja from './component/Forum/ForumPitanja/ForumPitanja'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/forum" exact component={Forum} />
      <Route path="/forum/pitanja" exact component={ForumPitanja} />
      <Route path="/forum/takmicenja" exact component={ForumPitanja} />
      <Route path="/forum/ostalo" exact component={ForumPitanja} />
    </Switch>
  )
}

export default App
