// © goodprogrammer.ru
// Simple Nodejs terminal app demo — colored output using Chalk
// npm i chalk --save
// #: function callbacks, objects as hashmaps, readline module, parseInt, console.log

// terminal input reading module
const readline = require('readline');
const chalk = require('chalk');

// line reader Node interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = { '0': 'Stone', '1': 'Scissors', '2': 'Paper' };

// writing question to STDOUT and assignin callback function on response
rl.question('0 — stone, 1 — scissors, 2 — paper\nYour choice?\n', (answer) => {
  // closing the terminal interface and return if choice is wrong
  if (!choices[answer]) {
    rl.close();
    return console.log('Wrong choice, get out!');
  }

  console.log(`You entered: ${choices[answer]}`);

  // computer random choice within the range
  const pcChoice = Math.floor(Math.random() * Object.keys(choices).length).toString();
  console.log(`PC chose: ${choices[pcChoice]}`);

  // main game logic
  if (pcChoice === answer) {
    console.log(`${chalk.blueBright('Draw')} 🤝`);
  } else if ((answer === '0' && pcChoice === '1')
    || (answer === '1' && pcChoice === '2')
    || (answer === '2' && pcChoice === '0')) {
    console.log(`${chalk.whiteBright.bgGreen('You win!')} 👍`);
  } else {
    console.log(`${chalk.whiteBright.bgMagenta('You loose!')} 👎`);
  }

  // close the terminal session
  rl.close();
});
