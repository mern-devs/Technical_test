import React from 'react'
import { LoadingIndicatorContainer } from '../features/loading'
import { connect } from 'react-redux'
import RootNavigator from './RootNavigator'
const NavigatorWrapper = ()=>{
  return (
    <>
      <RootNavigator />
      {/* <LoadingIndicatorContainer requestCount={10}/> */}
    </>
  )
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorWrapper)
