require('babel-register')({
  presets: ['react', 'es2015'],
});

require('babel-polyfill');


global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>Scrabble</title>
  </head>
  <body>
    <div id='application'></div>
  </body>
`);

global.window = global.document.defaultView;
global.navigator = global.window.navigator;
