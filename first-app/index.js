// part of modules & npm
// npm acquired by github, acquired by microsoft
// in terminal: npm init -y (-y for standard installation),
// creates a package.json file, contains metadata and dependencies
// then npm install express = minimal web application framework
// never touch node_modules file, it is package.json that controls 'everything'

import { createRequire } from 'module';

//  if you want to work with promises, use const { readFile } = require('fs').promises; see below
// import { appendFile, readFile } from 'fs';


const require = createRequire(import.meta.url);

const express = require('express');  // see above, an npm package, here imported as a CommonJS module


const myModule = require('./my-module.cjs'); // import the module in this dir

console.log(myModule); // for this to work, change the my-module extension to cjs

const app = express();

// disadvantage of call backs in call backs, is the call back hell
// a solution for this is to work with promises!, and so use
const { readFile } = require ('fs').promises;

// app.get('/', (request, response) => {
//   readFile('./home.html', 'utf-8', (err, html) => {
//     if (err) {
//       response.status(500).send('sorry, out of order')
//     }
//     response.send(html);
//   })
// });

// with a promise it will be an async function
app.get('/', async (request, response) => {

  response.send ( await readFile('./home.html', 'utf8'));
})
// change the port when already in use!
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
