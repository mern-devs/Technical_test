import * as ActionTypes from './action-types'


export const getBrushHistoryRequest = () => ({
  type: ActionTypes.GET_BRUSH_HISTORY_REQUEST,
  payload: {},
  showLoading: false,
})

export const getBrushHistorySuccess = (result: any) => ({
  type: ActionTypes.GET_BRUSH_HISTORY_SUCCESS,
  payload: { result },
  showLoading: false,
})

export const getBrushHistoryFailure = (error: any) => ({
  type: ActionTypes.GET_BRUSH_HISTORY_FAILURE,
  payload: { error },
  showLoading: false,
})