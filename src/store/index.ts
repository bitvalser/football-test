import { configureStore, Store, compose, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { AppState, rootReducer } from './reducers';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStore = (): { store: Store<AppState> } => {
  const middlewares = [sagaMiddleware];

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  const store = configureStore({
    reducer: rootReducer,
    enhancers: [compose(applyMiddleware(...middlewares))],
  });

  sagaMiddleware.run(sagas);

  return { store };
};

export default createStore;
