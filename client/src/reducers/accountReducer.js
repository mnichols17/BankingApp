const defaultState = {
    accounts: []
}

export default function (state = defaultState, action) {
    switch(action.type) {
        case("GET_ACCOUNTS"):
            state.accounts = action.payload
            return {
                ...state
            }
        case("CREATE_ACCOUNT"):
            state.accounts.push(action.payload)
            return {
                ...state
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