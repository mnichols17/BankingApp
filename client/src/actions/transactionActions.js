import axios from 'axios';

export const getTransactions = () => dispatch => {
    axios.get('/api/transactions')
    .then(res => dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data
    }))
    .catch(err => console.log(err))
   
}