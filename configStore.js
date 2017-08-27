import { createStore, applyMiddleware } from 'redux';
import app from './src/reducers';

import createSagaMiddleware from 'redux-saga';
import dataSaga from './src/sagas';
import { fetchData } from './src/actions';
const sagaMiddleware = createSagaMiddleware();

export default function configStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  store.dispatch(fetchData())  
  return store;
}