const defaultState = {
    transactions: []
}

export default function (state = defaultState, action) {
    switch(action.type) {
        case("GET_TRANSACTIONS"):
            return {
                ...state,
                transactions: [...action.payload]
            }
        case("CREATE_TRANSACTION"):
            return {
                ...state,
                transactions: [...action.payload]
            }
        case("DELETE_TRANSACTION"):
            return {
                ...state,
                transactions: [...action.payload]
            }
        default:
            return state
    }
}