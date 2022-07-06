import { legacy_createStore as createStore } from 'redux';
import rootReducer from './index';


const makeStore = () => {
  const store = createStore(rootReducer);
  return store;
}
import { createWrapper } from 'next-redux-wrapper';
const wrapper = createWrapper(makeStore);

export default wrapper;