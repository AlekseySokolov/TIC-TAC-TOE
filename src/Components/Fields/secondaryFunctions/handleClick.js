const handleClick = (index, turn, status, data, switchPlayer, addCross, addZero) => {
    if(turn === true && status === 'inProgress') {
        if (data[index] === '') {
            switchPlayer();
        }
        return  addCross(index)  ;
    } else if (turn === false && status === 'inProgress') {
        if (data[index] === '') {
            switchPlayer();
        }
        return addZero(index);
    }
};

export default handleClick;