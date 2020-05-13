const defaultState = {
    transactions: []
}

export default function (state = defaultState, action) {
    switch(action.type) {
        case("GET_TRANSACTIONS"):
            return {
                transactions: action.payload
            }
        case("CREATE_TRANSACTION"):
            state.transactions.push(action.payload)
            return {
                ...state
            }
        case("DELETE_TRANSACTION"):
            return {
                transactions: action.payload
            }
        default:
            return state
    }
}