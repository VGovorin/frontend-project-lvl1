import readlineSync from 'readline-sync';

export const greetingToGame = 'What is the result of the expression?';

const randomIndex = () => {
  const intAfterDot = Math.random().toString().split('.')[1];
  for (let i = 0; i < intAfterDot; i += 1) {
    if (intAfterDot[i] <= 2 && intAfterDot >= 0) {
      return Number(intAfterDot[i]);
    }
  }
};

const calculate = (int1, int2, operator) => {
  switch (operator) {
    case '*':
      return int1 * int2;
      break;
    case '+':
      return int1 + int2;
      break;
    case '-':
      return int1 - int2;
      break;
  }
};

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const operators = ['+', '-', '*'];
  const num1 = generateNumber();
  const num2 = generateNumber();
  const index = randomIndex();
  const realAnswer = calculate(num1, num2, operators[index]);
  const answerOfUser = readlineSync.question(`Question: ${num1} ${operators[index]} ${num2}\nYour answer: `);
  const correct = 'Correct!';
  const fatal = `'${answerOfUser}' is wrong answer :(. Correct answer was '${realAnswer}'`;
  const result = realAnswer === Number(answerOfUser) ? correct : fatal;
  return result;
};
