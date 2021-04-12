import { Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import s from './App.module.scss'
import store from './redux/store'
// Components
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className={s.mobile}>Don't worry. We are working on mobile design. Use your computer.</div>
        <main className={s.app}>
          <Navigation />
          <div className={s.content}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/home'} />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/skills" render={() => <Skills />} />
              <Route exact path="/works" render={() => <Works />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route exact path="*" render={() => <div />} />
            </Switch>
          </div>
        </main>
      </Provider>
    </HashRouter>
  )
}

export default App
