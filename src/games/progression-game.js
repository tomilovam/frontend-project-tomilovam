import { randomNum, playGame } from '../index.js';

const generateProgression = (progressionLength, initialElement, increment) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(initialElement + i * increment);
  }
  return progression;
};

export default () => {
  const instruction = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const minInitialElement = 1;
    const maxInitialElement = 50;
    const initialElement = randomNum(minInitialElement, maxInitialElement);
    const progressionLength = randomNum(5, 10);
    const increment = randomNum(2, 9);
    const progression = generateProgression(progressionLength, initialElement, increment);
    const hiddenIndex = randomNum(0, progressionLength - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return { question, correctAnswer };
  };

  playGame(instruction, getQuestionAndAnswer);
};
