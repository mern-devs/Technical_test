import * as ActionTypes from './action-types'


export const signupRequest = (name: string, email: string, password: string) => ({
  type: ActionTypes.SIGNUP_REQUEST,
  payload: {
    name,
    email,
    password
  },
  showLoading: false,
})

export const signupSuccess = (result: any) => ({
  type: ActionTypes.SIGNUP_SUCCESS,
  payload: { result },
  showLoading: false,
})

export const signupFailure = (error: any) => ({
  type: ActionTypes.SIGNUP_FAILURE,
  payload: { error },
  showLoading: false,
})