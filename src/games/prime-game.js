import { randomNum, playGame } from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) return false;
  }
  return question !== 1;
};

const generateQuestion = () => {
  const minRandomNum = 2;
  const maxRandomNum = 50;
  const question = randomNum(minRandomNum, maxRandomNum);
  return { question };
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const { question } = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

const runPrimeGame = () => {
  playGame(instruction, getQuestionAndAnswer);
};

export default runPrimeGame;
