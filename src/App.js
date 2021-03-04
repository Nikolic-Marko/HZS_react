import React from 'react'
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Homepage from './component/Homepage'
import Forum from './component/Forum/Forum'
import PitanjaStranica from './component/Forum/PitanjaContainer/PitnjaStranica/PitanjaStranica'
import Prijava from './component/Prijava/Prijava'
import DinamicneKategorije from './component/Forum/DinamicneKategorije/DinamicneKategorije'
import MojiPostovi from './component/Forum/MojiPostovi/MojiPostovi'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/forum/Radionice" exact component={DinamicneKategorije} />
        <Route path="/forum/MojiPostovi" exact component={MojiPostovi} />
        <Route
          path="/forum/DomaciZadatak"
          exact
          component={DinamicneKategorije}
        />
        <Route path="/forum/Pravila" exact component={DinamicneKategorije} />
        <Route path="/forum/Ostalo" exact component={DinamicneKategorije} />
        <Route
          path="/forum/PrezentovanjeResenja"
          exact
          component={DinamicneKategorije}
        />
        <Route path="/forum/ostalo/:id" exact component={PitanjaStranica} />
        <Route path="/forum/radionice/:id" exact component={PitanjaStranica} />
        <Route
          path="/forum/DomaciZadatak/:id"
          exact
          component={PitanjaStranica}
        />
        <Route
          path="/forum/domaćizadatak/:id"
          exact
          component={PitanjaStranica}
        />
        <Route
          path="/forum/PrezentovanjeResenja/:id"
          exact
          component={PitanjaStranica}
        />
        <Route
          path="/forum/prezentovanjerešenja/:id"
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
