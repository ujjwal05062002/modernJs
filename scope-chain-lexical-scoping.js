/*

1. Lexical Scoping : 
        Scoping that can be told just by looking at the code.

2. Scope Chaining : 
        Rule that is followed while lexical scoping, in this global variable can be accessed by functional declared variable but inside variable can't be accessed.

*/

var a = 10
function outer (){
    var b = 20
    function inner(){
        var c = 30
        console.log(`inside inner function a = ${a} b = ${b} c = ${c}`);
    }
    console.log(` inside outer function a = ${a} `) 
}
console.log(`in global scope : a = ${a}`);
