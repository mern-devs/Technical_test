import * as ActionTypes from './action-types'
import update from 'immutability-helper'
import createReducer from '../../../utils/createReducer'
import { LoginProps } from '../Login'

const initialState: LoginProps = {
  loading: false,
  error: null,
  navigation: null,
  route: null,
}

const handleLoginRequest = (state: LoginProps) => {
  return update(state, {
    loading: { $set: true },
    error: { $set: null },
  })
}

const handleLoginSuccess = (state: LoginProps, action: any) => {
  const loginResponse = action.payload.result
  return update(state, {
    loading: { $set: false },
    error: { $set: null },
    loginResult: { $set: loginResponse }
  })
}

const handleLoginFailure = (state: LoginProps, action: any) => {
  return update(state, {
    loading: { $set: false },
    error: { $set: action.payload.error },
    loginResult: { $set: undefined }
  })
}


const loginReducer = createReducer(initialState, {

  [ActionTypes.LOGIN_REQUEST]: handleLoginRequest,
  [ActionTypes.LOGIN_SUCCESS]: handleLoginSuccess,
  [ActionTypes.LOGIN_FAILURE]: handleLoginFailure,

})

export default loginReducer