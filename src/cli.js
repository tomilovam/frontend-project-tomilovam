import readline from 'readline-sync';

const greet = () => {
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export { greet };
