#!/usr/bin/env node

import readline from 'readline-sync';

import { randomNum, playGame } from '../src/index.js';

const gcd = (a, b) => {
	if (b === 0) return a;
	return gcd(b, a % b);
};

const playGcdGame = () => {
	console.log('Welcome to the Brain Games!');
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	console.log('Find the greatest common divisor of given numbers.');
	let correctAnswerCount = 0;
	const roundsCount = 3;

	while (correctAnswerCount < roundsCount) {
	const number1 = randomNum();
	const number2 = randomNum();
	const question = `${number1} ${number2}`;
	const correctAnswer = gcd(number1, number2);

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

playGcdGame();
