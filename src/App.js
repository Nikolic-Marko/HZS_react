import React from 'react'
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Homepage from './component/Homepage'
import Forum from './component/Forum/Forum'
import ForumPitanja from './component/Forum/ForumPitanja/ForumPitanja'
import PitanjaStranica from './component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica'
import Prijava from './component/Prijava/Prijava'
import Radionice from './component/Forum/PojedinacneKategorije/Radionice/Radionice'
import PrezentovanjeResenja from './component/Forum/PojedinacneKategorije/PrezentovanjeResenja/PrezentovanjeResenja'
import DomaciZadatak from './component/Forum/PojedinacneKategorije/DomaciZadatak/DomaciZadatak'
import Pravila from './component/Forum/PojedinacneKategorije/Pravila/Pravila'
import Ostalo from './component/Forum/PojedinacneKategorije/Ostalo/Ostalo'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/forum/Radionice" exact component={Radionice} />
        <Route path="/forum/DomaciZadatak" exact component={DomaciZadatak} />
        <Route path="/forum/Pravila" exact component={Pravila} />
        <Route path="/forum/Ostalo" exact component={Ostalo} />
        <Route
          path="/forum/PrezentovanjeResenja"
          exact
          component={PrezentovanjeResenja}
        />
        <Route path="/forum/ostalo/:id" exact component={PitanjaStranica} />
        <Route path="/forum/radionice/:id" exact component={PitanjaStranica} />
        <Route
          path="/forum/DomaciZadatak/:id"
          exact
          component={PitanjaStranica}
        />
        <Route
          path="/forum/PrezentovanjeResenja/:id"
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
