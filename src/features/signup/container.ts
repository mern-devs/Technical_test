import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Signup from './Signup'
import { signupRequest } from './ducks/actions'

const mapStateToProps = (state: any) => ({
    signupResult: state.signup.signupResult,
    loading: state.signup.loading,
    error: state.signup.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signup: (name: string, email: string, password: string) => dispatch(signupRequest(name, email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup)