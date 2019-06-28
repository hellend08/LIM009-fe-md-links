import {absolutePath} from '../src/cli.js'

describe("absolutePath",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof absolutePath).toEqual('function');
    }),
    it("deberia retornar true si la ruta es absoluta",()=>{
        expect(absolutePath('/home/jacky/Escritorio/LIM009-fe-md-links/')).toBe(true)
    }),
    it("deberia retornar false si la ruta es relativa",()=>{
        expect(absolutePath('Escritorio/LIM009-fe-md-links/')).toBe(false)
    })
 
 });