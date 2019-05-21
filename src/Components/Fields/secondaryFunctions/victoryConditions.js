const  victoryConditions = (data, wonTheCross, wonTheZERO, nobodyWon) => {

    if(data[0] === 'X' && data[1] === 'X' && data[2] ==='X') {
        return wonTheCross()
    }
    if(data[2] === 'X' && data[5] === 'X' && data[8] ==='X') {
        return wonTheCross()
    }
    if(data[8] === 'X' && data[7] === 'X' && data[6] ==='X') {
        return wonTheCross()
    }
    if(data[6] === 'X' && data[3] === 'X' && data[0] ==='X') {
        return wonTheCross()
    }
    if(data[1] === 'X' && data[4] === 'X' && data[7] ==='X') {
        return wonTheCross()
    }
    if(data[3] === 'X' && data[4] === 'X' && data[5] ==='X') {
        return wonTheCross()
    }
    if(data[0] === 'X' && data[4] === 'X' && data[8] ==='X') {
        return wonTheCross()
    }
    if(data[2] === 'X' && data[4] === 'X' && data[6] ==='X') {
        return wonTheCross()
    }
    if(data[0] === 'O' && data[1] === 'O' && data[2] ==='O') {
        return wonTheZERO()
    }
    if(data[2] === 'O' && data[5] === 'O' && data[8] ==='O') {
        return wonTheZERO()
    }
    if(data[8] === 'O' && data[7] === 'O' && data[6] ==='O') {
        return wonTheZERO()
    }
    if(data[6] === 'O' && data[3] === 'O' && data[0] ==='O') {
        return wonTheZERO()
    }
    if(data[1] === 'O' && data[4] === 'O' && data[7] ==='O') {
        return wonTheZERO()
    }
    if(data[3] === 'O' && data[4] === 'O' && data[5] ==='O') {
        return wonTheZERO()
    }
    if(data[0] === 'O' && data[4] === 'O' && data[8] ==='O') {
        return wonTheZERO()
    }
    if(data[2] === 'O' && data[4] === 'O' && data[6] ==='O') {
        return wonTheZERO()
    }
    if(data.every(value => value !== '') === true) {
        return nobodyWon();
    }
}

export default victoryConditions;