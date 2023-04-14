const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (first, second, third) => {
  const ratio_num = ratioOfTwoNumbers(first, second);
  const fact = factorialOfNumber(third);
  return {
    ratio: ratio_num,
    factorial: fact,
  };
};

module.exports = ratioAndFactorial;
