import readline from 'readline-sync';

export default function greetUser() {
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	return name;
}
