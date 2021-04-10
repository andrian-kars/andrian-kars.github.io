import { HashRouter, Route, Switch } from 'react-router-dom'
import s from './App.module.scss'
// Components
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import NightSky from './components/Animation/NightSky/NightSky'


const App = () => {
  return (
    <HashRouter>
      <main className={s.app}>
          <NightSky />
          <Navigation />
          <div className={s.content}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <div />} />
            <Route exact path="/skills" render={() => <div />} />
            <Route exact path="/works" render={() => <div />} />
            <Route exact path="*" render={() => <div />} />
          </Switch>
          </div>
      </main>
    </HashRouter>
  )
}

export default App
