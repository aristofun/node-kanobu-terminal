// © goodprogrammer.ru
// Simple Nodejs terminal app demo — command line arguments support
// 
// #: function callbacks, objects as hashmaps, readline module, parseInt, console.log,
//    yargs module, 

// terminal input reading module
const readline = require('readline');
const chalk = require('chalk');
const yargs = require('yargs');

// line reader Node interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main game values
const choices = {0: 'Stone', 1: 'Scissors', 2: 'Paper'};

// Comman line 'play' command with only argument
yargs.command({
  command: 'play <choice>',
  describe: 'Play game with command line argument',

  builder: (yargs) => {
    yargs.positional('choice', {
      describe: '0 — stone, 1 — scissors, 2 — paper',
      demandOption: true,
      type: 'number'
    })
  },

  handler: (argv) => {
    playGame(argv.choice);
    rl.close();
  }
});

const argv = yargs.parse();

// Main game function "engine"
function playGame(userAnswer) {
  // closing the terminal interface and return if choice is wrong
  if (!choices[userAnswer]) {
    return console.log('Wrong choice, get out!');
  }

  console.log(`You entered: ${choices[userAnswer]}`);

  // computer random choice within the range
  const pcChoice = Math.floor(Math.random() * Object.keys(choices).length);
  console.log(`PC chose: ${choices[pcChoice]}`);

  // main game logic
  if (pcChoice === userAnswer) {
    console.log(chalk.blueBright('Draw') + ' 🤝');
  } else if (userAnswer === 0 && pcChoice === 1
    || userAnswer === 1 && pcChoice === 2
    || userAnswer === 2 && pcChoice === 0) {
    console.log(chalk.whiteBright.bgGreen('You win!') + ' 👍');
  } else {
    console.log(chalk.whiteBright.bgMagenta('You loose!') + ' 👎');
  }
}


// If no command line arguments were specified
if (!argv.choice) {
  // writing question to STDOUT and assignin callback function on response
  rl.question('0 — stone, 1 — scissors, 2 — paper\nYour choice?\n', (answer) => {
    // get integer value from string input
    const userChoice = parseInt(answer);

    playGame(userChoice);
    // close the terminal session
    rl.close();
  });
}