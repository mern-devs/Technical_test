import { all } from 'redux-saga/effects'
import { loadingSaga } from '../features/loading'
import { loginSaga } from '../features/login'
import { signupSaga } from '../features/signup'
import { historySaga } from '../features/history'

function* rootSaga() {
  yield all([
    loadingSaga(),
  ])
}

export default rootSaga
