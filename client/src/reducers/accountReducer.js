const defaultState = {
    accounts: []
}

export default function (state = defaultState, action) {
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