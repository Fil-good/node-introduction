// if sync in namespace === blocking

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// const { readFile, readFileSync } = require ('fs');

// const file = await readFile('./hello.txt', 'utf-8'); // second solution

const {readFile } = require('fs').promises; // part of 2nd solution

async function hello() { // part of 2nd solution
  const file = await readFile('./tutorial.txt', 'utf-8');
  console.log(file);
}


// const txt = readFileSync('./tutorial.txt', 'utf-8'); // this is blocking!!
// console.log(txt);
// console.log('do this ASAP, please!!!'); executed after the sync stuff!

// with this callback, not blocking anymore! First solution!
readFile('./tutorial.txt', 'utf-8', (err, txt) => {
  console.log(txt);
});
console.log('do this asap!'); // first executed!!

// second solution: for non-blocking way: from the promises namespace!
hello();
