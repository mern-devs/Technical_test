import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'
import { Swing } from 'react-native-animated-spinkit'
import { MyState } from '../../utils/createReducer'

export interface LoadingIndicatorProps extends MyState{
  requestCount: number,
  visible: boolean
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const { visible } = props

  return (
    <Modal visible={visible} transparent={true}>
      <View 
        style={styles.container}
      >
        <Swing
          color={COLORS.oceanGreen}
          size={40}
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
