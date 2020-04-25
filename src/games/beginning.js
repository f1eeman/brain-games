import readlineSync from 'readline-sync';
import { showGreeting, showSalute } from '../index.js';

export default () => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
};
