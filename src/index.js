import './scss/style.scss';

const stuff = [
  28,
  'es6',
  false,
  'works',
  { hello: 'world' },
  'flawlessy',
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  '!',
];

const myString =
  stuff.filter(item => typeof item === 'string')
  .join(' ');

console.log(myString); // eslint-disable-line
