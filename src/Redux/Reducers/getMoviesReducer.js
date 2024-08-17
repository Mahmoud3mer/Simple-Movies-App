const INITIAL_VALUE = {
    movies: []
}

export const getMoviesReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return{
                ...state,
                movies: action.payload
            }
    
        default:
            return(state)
    }
}