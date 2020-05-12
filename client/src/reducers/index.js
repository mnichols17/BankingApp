import { combineReducers } from 'redux';

// Might be able to get rid of this
const defaultState = {
    accounts: [],
    //transactions: []
}

export default function accountReducer(state, action) {
    switch(action.type) {
        case("GET_ACCOUNTS"):
            return {
                ...state,
                accounts: [...action.payload]
            }
        case("CREATE_ACCOUNT"):
            return {
                ...state,
                accounts: [...action.payload]
            }
        case("EDIT_ACCOUNT"):
            return {
                ...state,
                accounts: [...action.payload]
            }
        case("DELETE_ACCOUNT"):
            return {
                ...state,
                accounts: [...action.payload]
            }
        default:
            return state
    }
}

/* Move to a main reducer at some point using
export default combineReducers ({

}) */