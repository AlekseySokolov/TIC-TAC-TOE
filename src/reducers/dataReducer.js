const initState = ['', '', '', '', '', '', '', '', ''];
const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_DATE_ZERO' :
            return state.reduce((acc, value, index) =>
            state[index] === 'X' ?
            acc.concat(value) :
            index === action.payload ?
            acc.concat(action.zero) :
            acc.concat(value)
                , [])
        case 'ADD_TO_DATE_CROSS' :
            return state.reduce((acc, value, index) =>
            state[index] === 'O' ?
            acc.concat(value) :
            index === action.payload ?
            acc.concat(action.cross) :
            acc.concat(value)
                , [])
        case 'RESET_GAME' :
            return state = initState
        default :
            return state
    }
}

export default dataReducer;