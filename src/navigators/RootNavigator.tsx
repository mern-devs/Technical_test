import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { NAVIGATORS } from '../constants/navigators'
import { LoginScreen } from '../features/login'
import { SignupScreen } from '../features/signup'
import { HistoryScreen } from '../features/history'

const Stack = createStackNavigator()

const RootNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen
        name={NAVIGATORS.LOGIN.name}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NAVIGATORS.SIGN_UP.name}
        component={SignupScreen}
      />
      <Stack.Screen
        name={NAVIGATORS.HISTORY.name}
        component={HistoryScreen}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator