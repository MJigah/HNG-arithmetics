
const ARITHMETIC_TYPE = {
    ADDITION: 'addition',
    ADD: 'add',
    MULTIPLICATION: 'multiplication',
    MULTIPLY: 'multiply',
    TIMES: 'times',
    TIME: 'time',
    SUBTRACTION: 'subtraction',
    SUBTRACT: 'subtract',
    MINUS: 'minus'
}

const arithmeticHandler = (req, res) => {
    const { operation_type, x, y} = req.body;
    let result;
    switch(operation_type){
        case ARITHMETIC_TYPE.ADD:
        case ARITHMETIC_TYPE.ADDITION:
            result = x + y;
            break;
        case ARITHMETIC_TYPE.MULTIPLY:
        case ARITHMETIC_TYPE.TIMES:
        case ARITHMETIC_TYPE.TIME:
        case ARITHMETIC_TYPE.MULTIPLICATION:
            result = x * y;
            break;
        case ARITHMETIC_TYPE.SUBTRACTION:
        case ARITHMETIC_TYPE.SUBTRACT:
        case ARITHMETIC_TYPE.MINUS:
            result = x - y;
            break;
        default: 
        result = null
    }
    res.json({
        slackUsername: "m_jigah",
        result,
        operation_type
    })
}


module.exports = { 
    arithmeticHandler
}