import readlineSync from 'readline-sync';

export const greetingToGame = 'What number is missing in the progression?';

const progressionLength = () => {
  const numberAfterPoint = Math.random().toString().split('.')[1];
  let len;
  for (let i = 0; i < numberAfterPoint.length; i += 1) {
    if (Number(numberAfterPoint[i]) >= 5) {
      len = Number(numberAfterPoint[i]);
    }
  }
  return len;
};

const intervalToProgression = () => {
  const numberAfterPoint = Math.random().toString().split('.')[1];
  let interval;
  for (let i = 0; i < numberAfterPoint.length; i += 1) {
    if (Number(numberAfterPoint[i]) >= 1 && Number(numberAfterPoint[i]) <= 5) {
      interval = Number(numberAfterPoint[i]);
    }
  }
  return interval;
};

const lostElementOfProgression = (lenOfProgression) => {
  const numberAfterPoint = Math.random().toString().split('.')[1];
  let result;
  for (let i = 0; i < numberAfterPoint.length; i += 1) {
    if (Number(numberAfterPoint[i]) < lenOfProgression) {
      result = Number(numberAfterPoint[i]);
    }
  }
  return result;
};

const createProgression = (start, interval, len) => {
  const coll = [];
  for (let i = start; coll.length <= len; i += interval) {
    coll.push(i);
  }
  return coll;
};

export const askQuestionAndGetAnswer = (userName, generateNumber) => {
  const start = generateNumber();
  const interval = intervalToProgression();
  const len = progressionLength();
  const progression = createProgression(start, interval, len);
  const indexLostElement = lostElementOfProgression(len);
  const trueAnswer = progression[indexLostElement];
  progression[indexLostElement] = '..';
  const answerOfUser = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);
  const correct = 'Correct!';
  const fatal = `'${answerOfUser}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`;
  const result = trueAnswer === Number(answerOfUser) ? correct : fatal;
  return result;
};
