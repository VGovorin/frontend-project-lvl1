import meetWithUser from './cli.js';

export const generateNumber = () => {
  const randomNum = Math.random();
  const str = randomNum.toString().split('.').slice(1)[0];
  const num = Number(str[0]) === 0 ? Number(str[1]) : Number(str.slice(0, 2));
  return num;
};

export const logicOfGame = (askQuestionAndGetAnswer, greetingToGame) => {
  const userName = meetWithUser();
  console.log(greetingToGame);
  for (let i = 1; i <= 3; i += 1) {
    const result = askQuestionAndGetAnswer(userName, generateNumber);
    if (result !== 'Correct!') {
      console.log(result);
      return;
    }
    console.log(result);
  }
  console.log(`Congratulations, ${userName}!`);
};
