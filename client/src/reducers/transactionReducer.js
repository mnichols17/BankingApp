const defaultState = {
    transactions: []
}

export default function (state = defaultState, action) {
    switch(action.type) {
        case("GET_TRANSACTIONS"):
            console.log(action.payload)
            return {
                transactions: action.payload
            }
        case("CREATE_TRANSACTION"):
            state.transactions.push(action.payload)
            console.log(state)
            return {
                ...state
            }
        case("DELETE_TRANSACTION"):
            return {
                ...state
            }
        default:
            return state
    }
}