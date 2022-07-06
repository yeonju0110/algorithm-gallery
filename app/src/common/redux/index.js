import { combineReducers } from 'redux';
import paramsReducer from './params';


const rootReducer = combineReducers({
  paramsReducer,
});

export default rootReducer;