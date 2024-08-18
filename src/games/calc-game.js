import { randomNum, randomOperator, playGame } from '../index.js';

const getRandomExpression = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const operator = randomOperator();
  const question = `${number1} ${operator} ${number2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return { question, correctAnswer };
};

export default () => {
  const instruction = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    const { question, correctAnswer } = getRandomExpression();
	return { question, correctAnswer };
  };

  playGame(instruction, getQuestionAndAnswer);
};
