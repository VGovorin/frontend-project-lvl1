import readlineSync from 'readline-sync';

export const greetingToGame = 'Find the greatest common divisor of given numbers.';

const gcd = (int1, int2) => {
  if (int2 === 0) {
    return int1;
  }
  return gcd(int2, int1 % int2);
};

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const trueAnswer = gcd(num1, num2);
  const answerOfUser = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
  const correct = 'Correct!';
  const fatal = `'${answerOfUser}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`;
  const result = trueAnswer === Number(answerOfUser) ? correct : fatal;
  return result;
};
