var a = 10;

function outer(){
    var b = 20
    function inner(){
        var c = 30
    }
    console.log(`in inner function a =${a} b = ${b}`);
    return inner
}

var closure  = outer()  // closure stores the value of a and b and c even if it is not inside the function

console.log(`${closure}`);

