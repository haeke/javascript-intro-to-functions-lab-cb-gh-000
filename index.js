
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
  console.log(phrase.toUppserCase());
}
