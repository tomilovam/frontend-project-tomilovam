import { randomNum, playGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = randomNum(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runEvenGame = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(instruction, getQuestionAndAnswer);
};

export { runEvenGame };
