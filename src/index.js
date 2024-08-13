export const randomNum = () => Math.floor(Math.random() * 100);

export const randomOperator = () => {
	const operators = ['+', '-', '*'];
	return operators[Math.floor(Math.random() * operators.length)];
};

export const playGame = (gameLogic) => {
	console.log('Welcome to the Brain Games!');
	const name = readline.question('May I have your name? ');
	console.log(`Hello, ${name}!`);

	const roundsCount = 3;
	let correctAnswerCount = 0;

	while (correctAnswerCount < roundsCount) {
	const { question, correctAnswer } = gameLogic();
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
