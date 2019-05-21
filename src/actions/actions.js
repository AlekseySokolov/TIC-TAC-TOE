export const addZero = (payload) => ({type : 'ADD_TO_DATE_ZERO', zero : 'O', payload:payload});
export const addCross = (payload) => ({type: 'ADD_TO_DATE_CROSS', cross: 'X', payload:payload});

export const switchPlayer = () => ({type: 'SWITCH_PLAYER'});

export const wonTheCross = () => ({type: 'WON_THE_CROSS'});
export const wonTheZERO = () => ({type: 'WON_THE_ZERO'});
export const nobodyWon = () => ({type: 'NOBODY_WON'});
export const reset = () => ({type : 'RESET_GAME'});