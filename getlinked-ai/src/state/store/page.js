import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import screensize from '../slices/screensize';


export function makeStore() {
  return configureStore({
    reducer: {
      screensize,
 
    },
  });
}

const store = makeStore();

function AppState() {
  return store.getState();
}

function AppDispatch() {
  return store.dispatch;
}

function AppThunk() {
  return (dispatch, getState) => {};
}

module.exports = {
  store,
  AppState,
  AppDispatch,
  AppThunk,
};