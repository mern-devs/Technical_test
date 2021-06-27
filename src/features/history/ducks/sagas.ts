import { call, put, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './action-types'
import * as Actions from './actions'
import { willoApi } from '../../../api'
import { get } from 'lodash'

function* history(action: any): React.ReactNode {
    try {
        const res = yield call(willoApi.getBrushHistory)
        yield put(Actions.getBrushHistorySuccess(res.data))
    } catch (error) {
        const errMessage = get(error, 'message', null)
        yield put(Actions.getBrushHistoryFailure(errMessage))
    }
}

function* historySaga() {
    yield takeLatest(ActionTypes.GET_BRUSH_HISTORY_REQUEST, history)
}

export default historySaga