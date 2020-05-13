import axios from 'axios';
import { createTransaction, deleteTransactions } from './transactionActions';

export const getAccounts = () => dispatch => {
    axios.get('/api/profiles')
    .then(res => {
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
        dispatch({
            type: "CREATE_ACCOUNT",
            payload: res.data
        })
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
    dispatch(deleteTransactions(id));
    axios.delete(`/api/profiles/${id}`)
    .then(res => {
        dispatch({
            type: "DELETE_ACCOUNT",
            payload: res.data
        })
    })
}