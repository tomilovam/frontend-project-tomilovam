import { randomNum, playGame } from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const generateQuestion = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const question = `${number1} ${number2}`;
  return { question, number1, number2 };
};

const getCorrectAnswer = (number1, number2) => (gcd(number1, number2));

const getQuestionAndAnswer = () => {
  const { question, number1, number2 } = generateQuestion();
  const correctAnswer = getCorrectAnswer(number1, number2);
  return { question, correctAnswer: String(correctAnswer) };
};

const runGcdGame = () => {
  playGame(instruction, getQuestionAndAnswer);
};

export default runGcdGame;
