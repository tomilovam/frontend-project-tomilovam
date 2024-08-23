import readline from 'readline-sync';
import greet from './cli.js';

export const randomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const playGame = (instruction, getQuestionAndAnswer) => {
  const name = greet();
  console.log(instruction);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
