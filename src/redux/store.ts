import { combineReducers, createStore } from 'redux'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
    skills: skillsReducer,
})

type RootReducerType = typeof rootReducer // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store