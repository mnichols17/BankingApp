import axios from 'axios';

export const getTransactions = () => dispatch => {
    axios.get('/api/transactions')
    .then(res => {
        console.log(res.data)
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
        console.log(res.data)
        dispatch({
            type: "CREATE_TRANSACTION",
            payload: res.data
        })
    })
}

export const deleteTransaction = () => dispatch => {
    
}