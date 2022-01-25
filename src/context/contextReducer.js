const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction)=>transaction.id !== action.payload);

            return transactions;
        case 'ADD_TRANSACTION':
                transactions = [action.payload, ...state];

                return transactions;
        default:
            return state;
    }

    // if(action.type === 'DELETE_TRANSACTION'){
        // transactions = state.filter((transaction)=>transaction.id !== action.payload)
        // return transactions;
    // }else if(action.type === 'ADD_TRANSACTION'){
        // transactions = [action.payload, ...state]
        // return transactions;
    // }
    //return state
}

export default contextReducer;