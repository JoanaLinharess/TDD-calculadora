const subtract = require('../funcoes/subtract.js');

const { assert: { isFunction, isNumber } } = require('chai');

describe('subtract', () => {
    it('retornar função', () => {

        isFunction(subtract);
    });
    it('retornar numero', () => {

        isNumber(subtract([6, 2]));
    });
});