import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer'

const reducers = combineReducers({
  repositories: repositoriesReducer
})

export default reducers

// allows TS to know type of state
export type RootState = ReturnType<typeof reducers>