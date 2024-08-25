import { randomNum, playGame } from '../index.js';

const instruction = 'What is the result of the expression?';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const operator = generateRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);

  return { question, correctAnswer: String(correctAnswer) };
};

const runCalcGame = () => {
  playGame(instruction, getQuestionAndAnswer);
};

export default runCalcGame;
