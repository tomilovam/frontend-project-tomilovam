import readline from 'readline-sync';
import greet from './cli.js';

export const randomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomOperator = () => {
	const operators = ['+', '-', '*'];
	return operators[Math.floor(Math.random() * operators.length)];
  };
  
export const playGame = (instruction, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  console.log(instruction);

  const roundsCount = 3;
  let correctAnswerCount = 0;

  while (correctAnswerCount < roundsCount) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');

    if (String(answer) === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswerCount++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
