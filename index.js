
global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

function shout(phrase) {
  return phrase.toUpperCase();
}
