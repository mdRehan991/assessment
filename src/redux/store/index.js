import {createStore} from 'redux';
import homeReducer from '../reducer/homeReducer';

const store = createStore(homeReducer);

export default store;
