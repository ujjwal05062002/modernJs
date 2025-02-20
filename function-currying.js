/*
function currying: 
        when a function instead of taking all argument at once take one argument and return new function then take second argument and return new function and so on.

*/

function sum(num1){
    return function sum(num2){
        return function sum(num3){
            return num1 + num2 + num3
        }
    }
}

console.log(sum(100)(200)(300));
