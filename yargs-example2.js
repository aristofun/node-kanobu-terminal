// © goodprogrammer.ru
// Nodejs CLI demo — command line arguments support via Yargs module
//
// run it with `node yargs-example2.js 1 2 --three -four --five=5`

const yargs = require('yargs');

console.log(yargs.argv);
console.log(yargs.argv.five);

if (yargs.argv.five === 5) {
  console.log('You are correct, my friend!');
} else {
  console.error('No no no! Five is 5');
}
