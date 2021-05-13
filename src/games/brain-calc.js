import readlineSync from 'readline-sync';

export const greetingToGame = 'What is the result of the expression?';

const randomIndex = () => {
  const intAfterDot = Math.random().toString().split('.')[1];
  for (let i = 0; i < intAfterDot.length; i += 1) {
    if (intAfterDot[i] <= 2 && intAfterDot >= 0) {
      return Number(intAfterDot[i]);
    }
  }
  return 0;
};

const calculate = (int1, int2, operator) => {
  let result;
  switch (operator) {
    case '*':
      result = int1 * int2;
      break;
    case '+':
      result = int1 + int2;
      break;
    case '-':
      result = int1 - int2;
      break;
    default:
      break;
  }
  return result;
};

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const operators = ['+', '-', '*'];
  const num1 = generateNumber();
  const num2 = generateNumber();
  const index = randomIndex();
  const realAnswer = calculate(num1, num2, operators[index]);
  const answerOfUser = readlineSync.question(`Question: ${num1} ${operators[index]} ${num2}\nYour answer: `);
  const correct = 'Correct!';
  const fatal = `'${answerOfUser}' is wrong answer :(. Correct answer was '${realAnswer}'.\nLet\`s try again, ${userName}!`;
  const result = realAnswer === Number(answerOfUser) ? correct : fatal;
  return result;
};
