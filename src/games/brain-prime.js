import readlineSync from 'readline-sync';

export const greetingToGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const num = generateNumber();
  const trueAnswer = isPrime(num) ? 'yes' : 'no';
  const answerOfUser = readlineSync.question(`Question ${num}\nYour answer: `);
  const correct = 'Correct!';
  const fatal = `'${answerOfUser}' is wrong answer :(. Correct answer was '${trueAnswer}'.\nLet\`s try again, ${userName}!`;
  const result = trueAnswer === answerOfUser ? correct : fatal;
  return result;
};
