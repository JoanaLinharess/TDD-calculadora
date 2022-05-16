const divide = require('../funcoes/divide.js');
const { assert: { isFunction, isNumber } } = require('chai');


describe('divide', () => {
    it('retornar função', () => {

        isFunction(divide);
    });
    it('Retornar numero', () => {
        
        isNumber(divide([6,2]));
    });
});