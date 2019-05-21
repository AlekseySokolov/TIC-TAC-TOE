const playerReducer = (state = true, action) => {
    switch (action.type) {
        case 'SWITCH_PLAYER' :
            return state = !state
        case 'RESET_GAME' :
            return state = true
        default:
            return state
    }
}
export default playerReducer;