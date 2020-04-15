import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navbarReducer from './navbarReducer';
import courseReducer from './courseReducer';

export default combineReducers(
    {
        users : userReducer,
        navbar : navbarReducer,
        course : courseReducer
    }
    );