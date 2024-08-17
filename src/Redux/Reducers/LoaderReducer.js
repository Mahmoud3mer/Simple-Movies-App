const INITIAL_VALUE = {
    isLoading: true
}

export const LoaderReducer = (state = INITIAL_VALUE , action) => {
    switch (action.type) {
        case "LOADER":
            return{
                ...state,
                isLoading: action.payload
            }
    
        default:
            return(state)
    }
}
