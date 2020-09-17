import { combineReducers } from 'redux';

import success from './successReducer';
import guessedWords from './GuessedWordsReducer';

export default combineReducers({
  success,
  guessedWords,
});
