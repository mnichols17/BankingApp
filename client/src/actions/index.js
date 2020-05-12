import axios from 'axios';

export const getAccounts = () => dispatch => {
    axios.get('/api/profiles')
    .then(res => {
        dispatch({
            type: "GET_ACCOUNTS",
            payload: res.data
        })
    })
}

export const createAccount = (firstName, lastName, balance) => dispatch => {
    axios({
        method: "post",
        url: '/api/profiles',
        data: { firstName, lastName, balance}
    })
    .then(res => {
        dispatch({
            type: "CREATE_ACCOUNT",
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