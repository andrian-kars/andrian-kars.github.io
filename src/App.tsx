import { HashRouter, Route, Switch } from 'react-router-dom'
import s from './App.module.scss'
// Components
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import { Provider } from 'react-redux'
import store from './redux/store'
import Saber from './components/Animation/Sabers/LukeSaber'

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <main className={s.app}>
          <Navigation />
          <div className={s.content}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <Saber />} />
              <Route exact path="/skills" render={() => <Skills />} />
              <Route exact path="/works" render={() => <Works />} />
              <Route exact path="*" render={() => <div />} />
            </Switch>
          </div>
        </main>
      </Provider>
    </HashRouter>
  )
}

export default App
