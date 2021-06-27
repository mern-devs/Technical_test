import { call, put, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './action-types'
import * as Actions from './actions'
import { willoApi } from '../../../api'
import { get } from 'lodash'

function* login(action: any): React.ReactNode {
    try {
        const { email, password } = action.payload
        const res = yield call(willoApi.login, email, password )
        yield put(Actions.loginSuccess(res.data))
      } catch (error) {
        const errMessage = get(error, 'message', null)
        yield put(Actions.loginFailure(errMessage))
      }
  }

function* loginSaga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login)
}

export default loginSaga