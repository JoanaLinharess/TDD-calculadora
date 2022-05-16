# NSS Node.Js Command Line Calculator

### Goals
Building a modularized Node application implementing TDD practices

### Directives
Construct a simple calculator, utilizing individual modules for each basic arithmetic operation: `add.js`, `subtract.js`, `multiply.js`, `divide.js`

In regards to TDD: initial tests ([Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/)) for each module were built before functions were constructed, ultimately, making the test fail. The modular functions were gradually built in this manner: incrementally building tests to receive a failed result & appling logic to make the constructed test pass.

Conditional statements were applied to the Command Line Interface (`cli.js`) to handle both desired and unwanted outcomes (user typos, misplacing the order of commands, entering text instead of numbers).

### Functionality
To run a basic arithmetic operation on a series of numbers, please run the following command with either operator (`add`, `subtract`, `multiply`, `divide`) and any series of numbers.
```
$ ./js/cli.js [operator] [numbers of choosing, separated by a space]
```
The order of operations will executed as the numbers are written out, i.e.:
```
$ ./js/cli.js add 4 8 16

// equivalent to:  4+8+16
```

