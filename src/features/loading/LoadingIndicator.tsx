import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import Spinner from 'react-native-spinkit'
import { MyState } from '../../utils/createReducer'

export interface LoadingIndicatorProps extends MyState {
  requestCount: number
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const { loading } = props

  return (
    <Modal visible={loading} transparent={true}>
      <View style={styles.container}>
        <Spinner
          isVisible={true}
          color={COLORS.oceanGreen}
          size={40}
          type={'Circle'}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingIndicator
