#! / usr / bin / env nodo
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absolutePath = void 0;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

console.log("link ingresado ".concat(args)); // Te pinta en la consola lo introducido.

var route = "".concat(args); //Constante que contiende la ruta introducida en la consola.

var path = require('path');

var fs = require('fs'); //analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------


var absolutePath = function absolutePath(route) {
  return path.isAbsolute(route);
};

exports.absolutePath = absolutePath;