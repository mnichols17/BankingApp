import axios from 'axios';

export const getTransactions = () => dispatch => {
    axios.get('/api/transactions')
    .then(res => {
        dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data
    })})
    .catch(err => console.log(err))
}

export const createTransaction = (id, amount, type) => dispatch => {
    axios({
        method: "post",
        url: `/api/transactions/${id}`,
        data: { amount, type }
    })
    .then(res => {
        dispatch({
            type: "CREATE_TRANSACTION",
            payload: res.data
        })
    })
}

export const deleteTransactions = (id) => dispatch => {
    axios({
        method: "delete",
        url: `/api/transactions/${id}`
    })
    .then(res => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: res.data
        })
    })
}