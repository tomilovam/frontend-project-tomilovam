import { randomNum, playGame } from '../index.js';

const instruction = 'What number is missing in the progression?';

const generateProgression = (progressionLength, initialElement, increment) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(initialElement + i * increment);
  }
  return progression;
};

const generateQuestion = () => {
  const initialElement = randomNum(1, 50);
  const progressionLength = randomNum(5, 10);
  const increment = randomNum(2, 9);
  const progression = generateProgression(progressionLength, initialElement, increment);
  const hiddenIndex = randomNum(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const getQuestionAndAnswer = () => {
  const { question, correctAnswer } = generateQuestion();
  return { question, correctAnswer: String(correctAnswer) };
};

const runProgressionGame = () => {
  playGame(instruction, getQuestionAndAnswer);
};

export default runProgressionGame;
