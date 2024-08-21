import { randomNum, playGame } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const runGcdGame = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const number1 = randomNum(1, 100);
    const number2 = randomNum(1, 100);
    const question = `${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);

    return { question, correctAnswer };
  };

  playGame(instruction, getQuestionAndAnswer);
};

export { runGcdGame };
