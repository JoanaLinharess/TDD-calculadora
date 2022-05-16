const add = require('../funcoes/add.js');
const { assert: { isFunction, isNumber, equal } } = require('chai');


describe('add', () => {
    it('retornar função', () => {

        isFunction(add);
    });
    it('retornar numero', () => {
        
        isNumber(add([1,2,3,4]));
    });
});