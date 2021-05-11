import readlineSync from 'readline-sync';

export default () => {
	const greetingText = 'Wlcome to the Brain Games!\nMay I have your name? ';
	const name = readlineSync.question(greetingText);
	console.log(`Hello, ${name}!`);
};
