#!/usr/bin/env node

import { greetingToGame, askQuestionAndGetAnswer } from '../src/games/brain-even.js';
import { logicOfGame } from '../src/index.js';

logicOfGame(askQuestionAndGetAnswer, greetingToGame);
