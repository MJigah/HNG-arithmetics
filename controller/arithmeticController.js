const ARITHMETIC_TYPE = {
  ADDITION: "addition",
  ADD: "add",
  MULTIPLICATION: "multiplication",
  MULTIPLY: "multiply",
  TIMES: "times",
  TIME: "time",
  SUBTRACTION: "subtraction",
  SUBTRACT: "subtract",
  MINUS: "minus",
};

const arithmeticHandler = (req, res) => {
  const { operation_type, x, y } = req.body;
  const {
    ADD,
    ADDITION,
    MULTIPLICATION,
    MULTIPLY,
    TIMES,
    TIME,
    SUBTRACTION,
    SUBTRACT,
    MINUS,
  } = ARITHMETIC_TYPE;

  let result;
  const checkVariables = [
    ADD,
    ADDITION,
    MULTIPLICATION,
    MULTIPLY,
    TIMES,
    TIME,
    SUBTRACTION,
    SUBTRACT,
    MINUS,
  ];
  if (
    operation_type.includes(ADD) ||
    operation_type.includes(ADDITION) ||
    operation_type.includes(MULTIPLICATION) ||
    operation_type.includes(MULTIPLY) ||
    operation_type.includes(TIMES) ||
    operation_type.includes(TIME) ||
    operation_type.includes(SUBTRACTION) ||
    operation_type.includes(SUBTRACT) ||
    operation_type.includes(MINUS)
  ) {
    let findVariable;
    for (var i = 0; i < checkVariables.length; i++) {
      if (operation_type.includes(checkVariables[i])) {
        findVariable = checkVariables[i];
      }
    }
    var num = operation_type.match(/\d+/g);
    var a, b;
    if (num !== null && num.length > 0) {
      a = parseInt(num[0]);
      b = parseInt(num[1]);
    } else {
      if (typeof x !== "number" || typeof y !== "number") {
        res.status(400).json({ message: "Enter valid values for x, y" });
      }
      a = x;
      b = y;
    }
    switch (findVariable) {
      case ADD:
      case ADDITION:
        result = a + b;
        break;
      case MULTIPLY:
      case TIMES:
      case TIME:
      case MULTIPLICATION:
        result = a * b;
        break;
      case SUBTRACTION:
      case SUBTRACT:
      case MINUS:
        result = a - b;
        break;
      default:
        result = null;
    }
    res.json({
      slackUsername: "m_jigah",
      result,
      operation_type,
    });
  } else {
    res.status(400).json({ message: "Enter valid operation type or string" });
  }
};

module.exports = {
  arithmeticHandler,
};
