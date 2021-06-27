import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Login from './Login'
import { loginRequest } from './ducks/actions'

const mapStateToProps = (state: any) => ({
    loginResult: state.login.loginResult,
    loading: state.login.loading,
    error: state.login.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (email: string, password: string)=>dispatch(loginRequest(email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)