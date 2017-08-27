import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configStore from './configStore';
import Main from './src/Main';

const store = configStore();

const TruckerRadio = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

AppRegistry.registerComponent('truckerRadio', () => TruckerRadio);