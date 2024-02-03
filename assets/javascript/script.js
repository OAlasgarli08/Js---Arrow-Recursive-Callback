"use strict";




// const sum = function(a,b){
//     return a+ b;
// }

// console.log(sum(3,5));


// const sum = (a,b) => {
//     return a + b
// } 

// console.log(sum(3,5));


// function test(){
//     for (let i = 0; i < arguments.length; i++) {
       
//         console.log(arguments[i]);
//     }
// }

// test(1,2,3,4,5)



// function test(){
//     console.log(this);
// }


// let stu = {
//     name: 'Name',
//     surname: 'Surname',
//     age: 16,
//     fullName: () =>{
//         console.log(this);
//     },

//     fullData:function(){
//         console.log(this);
//     }
// }


// stu.fullData();




// function showResult(num1,num2){
//     let str = 'Your result';
//     let res = sum(num1,num2);
//     console.log(str + " " + res);
// }

// function sum(a,b){
//     return a + b;
// }

// showResult(1,5)


// function showNums(firstNum){
//     console.log(firstNum);
//     let nexNum = firstNum - 1;
//     if(nexNum > 0){
//         showNums(nexNum);
//     }
// }

// showNums(5);



// function showOdd(item){
//     return item%2 == 1;
// }

// function showEven(item){
//     return item%2 == 0;
// }

// function sumNums(arr,callback){
//     let sum = 0;
//     for(const item of arr){
//         if(callback(item)){
//             sum += item;
//         }
//     }

//     return sum
// }


// let nums = [1,2,3,4,5];
// console.log(sumNums(nums,sumOdd));
