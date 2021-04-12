import { combineReducers, createStore } from 'redux'
import aboutReducer from './aboutReducer'
import skillsReducer from './skillsReducer'
import worksReducer from './worksReducer'

const rootReducer = combineReducers({
    skills: skillsReducer,
    works: worksReducer,
    about: aboutReducer
})

type RootReducerType = typeof rootReducer // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store