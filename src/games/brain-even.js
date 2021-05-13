import readlineSync from 'readline-sync';

export const greetingToGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const number = generateNumber();
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const answerOfUser = readlineSync.question(`Question: ${number}\nYour answer: `);
  const fatalMessage = `'${answerOfUser}' is wrong answer ;(. Correct answer '${trueAnswer}'.\nLet's try again, ${userName}!`;
  const correctMessage = 'Correct!';
  const result = answerOfUser === trueAnswer ? correctMessage : fatalMessage;
  return result;
};
