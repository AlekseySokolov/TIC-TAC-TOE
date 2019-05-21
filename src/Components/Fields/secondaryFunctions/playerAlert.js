const playerAlert = (data, status) =>
    data.every(values => values !== '') === true &&
    status !== 'wonTheZero' &&
    status !== 'wonTheCross'?
       'NOBODY WON...sadly!':
        status === 'wonTheCross' ?
       'CONGRATULATIONS WON CROSSES!' :
        status === 'wonTheZero'?
        'WON ZEROS HATE THEM!':
        'iN GAME'

export default playerAlert;