import { call, put, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './action-types'
import * as Actions from './actions'
import { willoApi } from '../../../api'
import { get } from 'lodash'

function* signup(action: any): React.ReactNode {
    try {
        const { name, email, password } = action.payload
        const res = yield call(willoApi.signUp, email, password, name )
        yield put(Actions.signupSuccess(res.data))
      } catch (error) {
        const errMessage = get(error, 'message', null)
        yield put(Actions.signupFailure(errMessage))
      }
  }

function* signupSaga() {
    yield takeLatest(ActionTypes.SIGNUP_REQUEST, signup)
}

export default signupSaga