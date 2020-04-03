import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';

const rootReducer = history => combineReducers({
  currentUser: currentUserReducer
});

export default rootReducer;