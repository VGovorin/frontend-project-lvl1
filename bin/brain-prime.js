#!/usr/bin/env node

import { logicOfGame } from '../src/index.js';
import { greetingToGame, askQuestionAndGetAnswer } from '../src/games/brain-prime.js';

logicOfGame(askQuestionAndGetAnswer, greetingToGame);
