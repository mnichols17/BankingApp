import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import transactionReducer from './transactionReducer';

export default combineReducers ({
    accounts: accountReducer,
    transactions: transactionReducer
})