const multiply = require('../funcoes/multiply.js');

const { assert: { isFunction, isNumber } } = require('chai');

describe('multiply', () => {
    it('retornar função', () => {
        
        isFunction(multiply);
    });
    it('retornar numero', () => {
        isNumber(multiply([6, 2]));
    });
});