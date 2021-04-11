import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import s from './App.module.scss'
// Components
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <main className={s.app}>
          <Navigation />
          <div className={s.content}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/news'} />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
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
