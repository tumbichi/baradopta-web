import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import config from './reducers/config.reducer';

const store = createStore(config, applyMiddleware(thunk));

export default store;
