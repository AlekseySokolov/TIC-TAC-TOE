const fieldsClasses = (data, index) =>
    data[index] ==='X'?
    'field_cross' :
    data[index] === 'O' ?
    'field_zero' :
    'field'

export default fieldsClasses;