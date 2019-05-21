const gameStatusReducer = (state = 'inProgress', action) => {
    switch (action.type) {
        case 'RESET_GAME' :
            return state = 'inProgress'
        case 'WON_THE_CROSS' :
            return state = 'wonTheCross'
        case  'WON_THE_ZERO' :
            return state = 'wonTheZero'
        case 'NOBODY_WON' :
            return state = 'nobodyWon'
        default :
            return state
    }
}

export default gameStatusReducer;