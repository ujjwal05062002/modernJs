/*
Synchronus Programming : 
        When one task has to be completed just after the other in a sequence.

Asynchronus Programming :
        When one task has to wait before the next task is completed.

*/

setTimeout(()=>{
    var a = console.log("this task will be completed after 1 second")
},1000)

setTimeout(()=>{
    var a = console.log("this task will be completed after 3 second")
},3000)
setTimeout(()=>{
    var a = console.log("this task will be completed after 5 second")
},5000)
setTimeout(()=>{
    var a = console.log("this task will be completed after 7 second")
},7000)
setTimeout(()=>{
    var a = console.log("this last task will be completed after 2 second")
},2000)