#!/usr/bin/env node

import readline from 'readline-sync';

const randomNum = () => Math.floor (Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const playGame = () => {
	console.log('Welcome to the Brain Games!');
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	let correctAnswerCount = 0;
	const roundsCount = 3;

while (correctAnswerCount < roundsCount) {
	const number = randomNum();
	console.log(`Question: ${number}`);
	const userAnswer = readline.question('Your answer: ');

	if (userAnswer === 'yes' && isEven(number)) {
		console.log('Correct!');
		correctAnswerCount++;
		} else if (userAnswer === 'no' && !isEven(number)) {
		  console.log('Correct!');
		  correctAnswerCount++;
		} else {
		  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
		  console.log(`Let's try again, ${name}!`);
		  return
		}
	}
	console.log(`Congratulations, ${name}!`);
};

playGame();
