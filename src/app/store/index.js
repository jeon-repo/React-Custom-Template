import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createReducer, { persistConfig } from './rootReducer';

const isServer = process.env.REACT_APP_MODE === 'production';

if (!isServer && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer.createReducer());
  });
}

const middlewares = [];

if (!isServer) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

  middlewares.push(logger);
}

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: !isServer,
});

store.asyncReducers = {};
// Persist 추가
export const persistor = persistStore(store);

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(persistReducer(persistConfig, createReducer(store.asyncReducers)));
  return persistStore(store);
};

export default store;
