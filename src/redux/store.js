import {createStore, applyMiddleware, combineReducers} from 'redux';
import appReducer from './reducers/app.reducer';
import userReducer from './reducers/user.reducer';
import logger from 'redux-logger';

const store = createStore(combineReducers({ user : userReducer, app: appReducer }), applyMiddleware(logger))

export default store;