import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducer from './reducers/index';

const initialState = {
    accounts: [],
    //transactions: []
};

const middleware = [Thunk];

const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware)));

export default store;