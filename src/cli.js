import readline from 'readline-sync';

export default function greetUser() {
	console.log('Welcome to the Brain Games!');
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
}
