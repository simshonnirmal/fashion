
const defaultState = {
    adminuser: ""
}

export default (state= defaultState, action) => {
    switch(action.type){
        case 'ORDER_RESPONSE':
            return {
                ...state,
                orderresponse: action.data
            }
        case 'SORT':
        return {
            ...state,
            orderresponse: state.orderresponse.slice().sort(function(a, b) {
                var nameA = a[action.sortvalue].toLowerCase(),
                  nameB = b[action.sortvalue].toLowerCase()
                if (nameA < nameB)
                  return -1
                if (nameA > nameB)
                  return 1
                return 0
                })
    }
      default: return state
    }
}
