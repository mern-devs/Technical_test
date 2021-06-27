import * as ActionTypes from './action-types'
import update from 'immutability-helper'
import createReducer from '../../../utils/createReducer'
import { HistoryProps } from '../History'

const initialState: HistoryProps = {
  loading: false,
  error: null,
  route: null,
}

const handleHistoryRequest = (state: HistoryProps) => {
  return update(state, {
    loading: { $set: true },
    error: { $set: null },
  })
}

const handleHistorySuccess = (state: HistoryProps, action: any) => {
  const historyResponse = action.payload.result.data
  return update(state, {
    loading: { $set: false },
    error: { $set: null },
    getBrushHistoryResult: { $set: historyResponse }
  })
}

const handleHistoryFailure = (state: HistoryProps, action: any) => {
  return update(state, {
    loading: { $set: false },
    error: { $set: action.payload.error },
    getBrushHistoryResult: { $set: undefined }
  })
}


const historyReducer = createReducer(initialState, {

  [ActionTypes.GET_BRUSH_HISTORY_REQUEST]: handleHistoryRequest,
  [ActionTypes.GET_BRUSH_HISTORY_SUCCESS]: handleHistorySuccess,
  [ActionTypes.GET_BRUSH_HISTORY_FAILURE]: handleHistoryFailure,

})

export default historyReducer