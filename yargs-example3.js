// © goodprogrammer.ru
// Nodejs CLI demo — command line arguments support via Yargs module
//
// run it with `node yargs-example2.js 1 2 --three -four --five=5`

const yargs = require('yargs');

// Comman line 'showTime' command without arguments
yargs.command({
  command: 'showTime',
  aliases: 't',
  describe: 'Shows current nodejs time',

  handler: (argv) => {
    console.log(`Current time is ${new Date(Date.now()).toLocaleString('RU')}`);
  }
});

yargs.command({
  command: '2power <number>',
  describe: 'Takes 2 to the given power',

  builder: (yrgs) => {
    yrgs.positional('number', {
      describe: 'Number to take 2 to',
      demandOption: true,
      type: 'number'
    });
  },

  handler: (argv) => {
    console.log(`2^${argv.number} = ${2 ** argv.number}`);
  }
});

const argv = yargs.parse();

console.log(argv);
