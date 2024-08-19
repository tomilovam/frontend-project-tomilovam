import { randomNum, playGame } from "../index.js";

const isPrime = (question) => {
    for (let i = 2; i < question; i ++) {
      if (question % i === 0) return false;
    }
    return question !== 1;
  };

export default () => {
    const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const getQuestionAndAnswer = () => {
        const minRandomNum = 2;
        const maxRandomNum = 50;
        const question = randomNum(minRandomNum, maxRandomNum);

        const correctAnswer = isPrime(question) ? 'yes' : 'no';

        return { question, correctAnswer };
    };

    playGame(instruction, getQuestionAndAnswer);
};