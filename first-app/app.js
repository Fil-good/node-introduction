// run app by typing node first-app in the terminal. and you need to be in the right directory!!!
// nvm use 12.16.3

// without import createRequire impossible to use require('events')

// Common JS : require()
// ES MODUELS : import/export
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { Logger } from './logger.js';

Logger.log("FIL");

// global variable = process
let showEnv = process.env.USER; // process is also a GLOBAL
let currentEnv = process.env

console.log(showEnv);
console.log(currentEnv);

// this doesn't work at the moment :-(
const someOutput = process.on('exit', function() {
  console.log('bye bye!!');
})
console.log(someOutput) ;




// EVENTS
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch',() => {
  console.log('yum yummie!')
})

eventEmitter.emit('lunch');


// MODULES
// OS: operating system
// FS : filsystem
// Events
// HTTP

// GLOBAL FUNCTIONS
// console.log() or global.console.log()
// setTimeout()
// clearTimeout();
// in NODE no window object!
