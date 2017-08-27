import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configStore'
import Main from './src/Main'

const store = configureStore()

const TruckerRadio = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

AppRegistry.registerComponent('truckerRadio', () => TruckerRadio);