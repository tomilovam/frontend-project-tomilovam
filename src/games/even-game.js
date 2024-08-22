import { randomNum, playGame } from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = randomNum(1, 100);
  const question = `${number}`;
  return { question, number };
};

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const { question, number } = generateQuestion();
  const correctAnswer = getCorrectAnswer(number);
  return { question, correctAnswer };
};

const runEvenGame = () => {
  playGame(instruction, getQuestionAndAnswer);
};

export { runEvenGame };
