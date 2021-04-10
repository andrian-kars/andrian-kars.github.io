import s from './App.module.scss'
import { Route, withRouter, HashRouter, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <main className={s.app}>
      <HashRouter>
        <Switch>

        </Switch>
      </HashRouter>
    </main>
  )
}

export default App
