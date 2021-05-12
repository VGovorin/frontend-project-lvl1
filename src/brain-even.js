import readlineSync from 'readline-sync';
import greeting from './cli.js';

const generateNumber = () => {
  const randomNum = Math.random();
  const str = randomNum.toString().split('.').slice(1)[0];
  const num = Number(str[0]) === 0 ? Number(str[1]) : Number(str.slice(0, 2));
  return num;
};

const askQuestionAndGetAnswer = (userName) => {
  const number = generateNumber();
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const answerOfUser = readlineSync.question(`Question: ${number}\nYour answer: `);
  const fatalMessage = `'${answerOfUser}' is wrong answer ;(. Correct answer '${trueAnswer}'.\nLet\`s try again, ${userName}!`;
  const correctMessage = 'Correct!';
  const result = answerOfUser === trueAnswer ? correctMessage : fatalMessage;
  return result;
};

const logicOfGame = () => {
  const userName = greeting();
  const greetingToEvenGames = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(greetingToEvenGames);
  for (let i = 1; i <= 3; i += 1) {
    const result = askQuestionAndGetAnswer(userName);
    if (result !== 'Correct!') {
      console.log(result);
      return;
    }
    console.log(result);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default logicOfGame;
