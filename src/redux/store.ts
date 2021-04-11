import { combineReducers, createStore } from 'redux'
import skillsReducer from './skillsReducer'
import worksReducer from './worksReducer'

const rootReducer = combineReducers({
    skills: skillsReducer,
    works: worksReducer
})

type RootReducerType = typeof rootReducer // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store