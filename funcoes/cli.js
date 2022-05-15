#!Joana Linhares da Silva. Programa de estagio IBlue

const add = require('./add.js');

const subtract = require('./subtract.js');
const multiply = require('./multiply.js');

const divide = require('./divide.js');

[,,cmd] = process.argv;
[,,,...args] = process.argv;

function operatorChoice() {
    let nums = [];
    args.forEach(n=>nums.push(+n));
    for(let i=0; i<nums.length; i++){

        if(isNaN(nums[i])) return console.log("ERRO. Utilize apenas numeros.");
    };
    if (cmd === "add") {
        process.stdout.write(`${add(nums)}\n`);
    } else if (cmd === "subtract") {

        process.stdout.write(`${subtract(nums)}\n`);
    } else if (cmd === "multiply") {
        process.stdout.write(`${multiply(nums)}\n`);
    } else if (cmd === "divide") {
        process.stdout.write(`${divide(nums)}\n`);
    } 
};

function errorCommand() {

    process.stdout.write("ERRO. Coloque um comando correto, os comando possiveis são:\nadd, subtract, multiply, or divide\n Depois coloque os numeros");
};

function errorArgs() {

    process.stdout.write("Coloque a função e depois os numeros\n");
};

if (cmd === "add" || cmd === "subtract" || cmd === "multiply" || cmd === "divide") {
    
    !args.length ? errorArgs() : operatorChoice();
} else {
    errorCommand();
}
