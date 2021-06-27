import { combineReducers } from 'redux'
import { loadingReducer } from '../features/loading'
import { loginReducer } from '../features/login'
import { signupReducer } from '../features/signup'
import { historyReducer } from '../features/history'


const rootReducer = combineReducers({
  loading: loadingReducer,
  login: loginReducer,
  signup: signupReducer,
  history: historyReducer
})

export default rootReducer
