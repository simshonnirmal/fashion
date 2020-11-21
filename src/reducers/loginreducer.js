
const defaultState = {
    username: "",
    password: ""
}

export default (state= defaultState, action) => {
    switch(action.type){
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            }
        case 'SET_PASSWORD':
                return {
                    ...state,
                    password: action.password
            }
            case 'DATABASE':
                    return {
                        ...state,
                        database: action.data
                }
        default: return state
    }
}

// export  default loginReducer;
