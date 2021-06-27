import * as ActionTypes from './action-types'
import update from 'immutability-helper'
import createReducer from '../../../utils/createReducer'
import { SignupProps } from '../Signup'

const initialState: SignupProps = {
  loading: false,
  error: null,
  route: null,
}

const handleSignupRequest = (state: SignupProps) => {
  return update(state, {
    loading: { $set: true },
    error: { $set: null },
  })
}

const handleSignupSuccess = (state: SignupProps, action: any) => {
  const loginResponse = action.payload.result.data
  return update(state, {
    loading: { $set: false },
    error: { $set: null },
    signupResult: { $set: loginResponse }
  })
}

const handleSignupFailure = (state: SignupProps, action: any) => {
  return update(state, {
    loading: { $set: false },
    error: { $set: action.payload.error },
    signupResult: { $set: undefined }
  })
}


const signupReducer = createReducer(initialState, {

  [ActionTypes.SIGNUP_REQUEST]: handleSignupRequest,
  [ActionTypes.SIGNUP_SUCCESS]: handleSignupSuccess,
  [ActionTypes.SIGNUP_FAILURE]: handleSignupFailure,

})

export default signupReducer