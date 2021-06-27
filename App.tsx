import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ReactElement } from 'react';
import { Provider } from 'react-redux'
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationService from './src/navigators/NavigationService'
import NavigatorWrapper from './src/navigators/NavigatorWrapper'

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={NavigationService.navigationRef}>
            <NavigatorWrapper/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
