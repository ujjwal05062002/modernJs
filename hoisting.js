/*
Hoisting : 
    Hoisting is a mechanism in which the creation phase is moved on the top of execution phase.


js programming has two phases : 

    1. Creation Phase
    2. Execution Phase

1. Creation Phase : 
        this phase contains all the defination of all variables and functions prototype of a program.

2. Execution Phase :
        this phase contains all the program statement.
*/

// Code we write

console.log(a);  // execution
var a = 10;      // creation
console.log(a);  // execution phase

// Code that run

var a           // creation phase
console.log(a); // execution phase
a = 10          // execution phase
console.log(a); // execution phase