
global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

function shout(phrase) {
  return phrase.toUpperCase();
};

function whisper(phrase) {
  return phrase.toLowerCase();
}

function logShout(phrase) {
  console.log(phrase.toUpperCase());
}

function logWhisper(phrase) {
  console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase) {
  if (phrase.toLowerCase() === phrase) {
    return "I can\'t hear you!";
  } else if (phrase.toUpperCase() === phrase) {
    return 'YES INDEED!';
  } else if (phrase === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
