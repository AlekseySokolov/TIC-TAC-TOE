const symbolClasses = (data, index) =>
    data[index] ==='X' ?
    'cross':
    data[index] ==='O' ?
    'zero' :
    'cross';

export default symbolClasses;