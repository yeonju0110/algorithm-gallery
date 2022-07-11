import { combineReducers } from 'redux';
import paramsReducer from './params';
import loginReducer from './login';


const rootReducer = combineReducers({
  paramsReducer,
  loginReducer
});

export default rootReducer;