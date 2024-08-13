#!/usr/bin/env node

import readline from 'readline-sync';

import { randomNum, randomOperator, playGame } from '../src/index.js';

const playCalcGame = () => {
	console.log('Welcome to the Brain Games!');
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	console.log('What is the result of the expression?');
	
	let correctAnswerCount = 0;
	const roundsCount = 3;

	while (correctAnswerCount < roundsCount) {
		const number1 = randomNum();
		const number2 = randomNum();
		const operator = randomOperator();
		const question = `${number1} ${operator} ${number2}`;
		let correctAnswer;

		switch (operator) {
		case '+':
			correctAnswer = number1 + number2;
			break;
		case '-':
			correctAnswer = number1 - number2;
			break;
		case '*':
			correctAnswer = number1 * number2;
			break;
		default:
			throw new Error(`Unknown operator: ${operator}`); 
		}
		console.log(`Question: ${question}`);
		const answer = readline.question('Your answer: ');

		if (Number(answer) === correctAnswer) {
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

playCalcGame();
