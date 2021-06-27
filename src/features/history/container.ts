import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import History from './History'
import { getBrushHistoryRequest } from './ducks/actions'

const mapStateToProps = (state: any) => ({
    getBrushHistoryResult: state.history.getBrushHistoryResult,
    loading: state.history.loading,
    error: state.history.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getBrushHistory: () => dispatch(getBrushHistoryRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(History)