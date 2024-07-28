import { combineReducers, createStore } from '@reduxjs/toolkit'
import snackbarReducer from './reducers/SnackBarReducer';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
});

const store = createStore(rootReducer);

export default store;
