import axios from 'axios';
import { getTransactions, createTransaction } from './transactionActions';

export const getAccounts = () => dispatch => {
    axios.get('/api/profiles')
    .then(res => {
        dispatch(getTransactions());
        dispatch({
            type: "GET_ACCOUNTS",
            payload: res.data
        })
    })
}

export const createAccount = (firstName, lastName, balance) => async dispatch => {
    axios({
        method: "post",
        url: '/api/profiles',
        data: { firstName, lastName, balance}
    })
    .then(res => {
        dispatch(createTransaction(res.data.id, balance, "Deposit"));
    })
}

export const editAccount = ({id, firstName, lastName, balance}) => dispatch => {
    axios({
        method: "put",
        url: `/api/profiles/${id}`,
        data: { id, firstName, lastName, balance}
    })
    .then(res => {
        dispatch({
            type: "EDIT_ACCOUNT",
            payload: res.data
        })
    })
}

export const editBalance = (id, amount, type) => dispatch => {
    axios({
        method: "put",
        url: `/api/profiles/balance`,
        data: { id, amount, type }
    })
    .then(res => {
        dispatch({
            type: "EDIT_ACCOUNT",
            payload: res.data
        })
    })
}

export const deleteAccount = (id) => dispatch => {
    axios.delete(`/api/profiles/${id}`)
    .then(res => {
        dispatch({
            type: "DELETE_ACCOUNT",
            payload: res.data
        })
    })
}