#! / usr / bin / env nodo

const [,,  ...args] = process.argv;
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.
const route = `${args}`; //Constante que contiende la ruta introducida en la consola.


const path = require('path');
const fs = require('fs');

//analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------
export const absolutePath = (route)=>{
   return path.isAbsolute(route)
}