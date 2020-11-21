import { combineReducers } from 'redux';
import loginReducer from './loginreducer.js';
import forgotReducer from './forgotreducer.js';
import orderlistReducer from './orderlistreducer.js';
const rootReducer = combineReducers({
  loginReducer,
  forgotReducer,
  orderlistReducer
});

export default rootReducer;
