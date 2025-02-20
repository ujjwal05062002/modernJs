/*
High-Order-Function : 
        function that takes other function as arguments.

        for example : map, filter, find(), findIndex()
*/

var a = [3,10,203,40,503,20,5023,52301,5320,23521,1324,12,34,5,6,7,8,99,2,1050,3050]

function check(num){
    return num%5 == 0
}

// function myFind(arr,fun){
//     for (let item of arr){
//         if (fun(item)){
//             return item
//         }
//         else{
//             return undefined
//         }
//     }
// }

// function myFindIndex(arr,fun){
//     for (let index in arr){
//         if (fun(arr[index]))
//             return index
//     }
//     return -1
// }

// function myMap(arr,fun){
//     let output = []
//     for (let item of arr){
//         output.push(fun(item))
//     }
//     return output
// }

function myFilter(arr,fun){
    let output = []
    for (let item of arr){
        if (fun(item))
            output.push
    }
    return output(item)
}

// console.log(myFind(a,check));
// console.log(myFindIndex(a,check));
// console.log(myMap(a,check));
