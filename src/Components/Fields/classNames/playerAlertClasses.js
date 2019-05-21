const playerAlertClasses = (status) =>
    status === 'inProgress' ? 'inProgress' :
    status === 'wonTheCross' ? 'wonTheCross':
    status === 'wonTheZero' ? 'wonTheZero' :
    status === 'nobodyWon' ? 'nobodyWon' : 'nobodyWon'

export default playerAlertClasses;