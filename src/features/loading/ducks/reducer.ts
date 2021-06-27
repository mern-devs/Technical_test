import createReducer from '../../../utils/createReducer'
import * as ActionTypes from './action-types'
import update from 'immutability-helper'
import { LoadingIndicatorProps } from '../LoadingIndicator'

const initialState: LoadingIndicatorProps = {
  requestCount: 0,
  loading: false,
  visible: false,
}

const handleShowLoadingIndicator = (state: LoadingIndicatorProps) => {
  return update(state, {
    visible: { $set: true },
  })
}

const handleHideLoadingIndicator = (state: LoadingIndicatorProps) => {
  return update(state, {
    visible: { $set: false },
  })
}

const handleIncreaseLoadingRequest = (state: LoadingIndicatorProps) => {
  return update(state, {
    requestCount: {
      $apply: (count) => ++count,
    },
  })
}

const handleDecreaseLoadingRequest = (state: LoadingIndicatorProps) => {
  return update(state, {
    requestCount: {
      $apply: (count) => --count,
    },
  })
}

const loadingReducer = createReducer(initialState, {
  [ActionTypes.SHOW_LOADING_INDICATOR]: handleShowLoadingIndicator,
  [ActionTypes.HIDE_LOADING_INDICATOR]: handleHideLoadingIndicator,
  [ActionTypes.INCREASE_LOADING_REQUEST]: handleIncreaseLoadingRequest,
  [ActionTypes.DECREASE_LOADING_REQUEST]: handleDecreaseLoadingRequest,
})

export default loadingReducer
