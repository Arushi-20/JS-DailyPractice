console.log("Arushi Sharma");
// js variable: let,var,const
//var can be redefined and reassign
var a=45;
a=50
console.log(a);

//let can not be redefined but it can be updated or reassign
let b=78
// let b=4
b=34
console.log(b);

//const cannot be redefined and reassign
// const c=98
// c=45
// console.log(c);

//operators
//hoisting vs hosting
//behaviour of javascript:hoisting

//hosting: Storing you website files on a server so that people can access your website through the internet. popular hosting provider: GoDaddy, Hostinger and BlueHost

// Hoisting: Hoisting is the JavaScript's behaviour of moving the variable and function declarations to the top of their scope before code.
//example of the hoisting
// console.log(a);
// var a=10;

//treats like 
// var a;
// console.log(a);
// a=10;


console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a-b);
console.log(a%b);

let d=2
let e=3
console.log(d!=e);

//increment and decrement operator
let c=66 
// console.log(c++, c, c++, c, c, c, c++, c++, c++,c);
// 66,67,67,68,68,68,68,69,70,71

// console.log(c++, c++, ++c, ++c, c,c++,++c,c,c++);
console.log(d++, --d, d, d++, d--, d, ++d, ++d, d++,d++);

//logical operators: || && !
console.log(d || e);
console.log(d && e);
console.log(!e);

//ternary operator
console.log((5===5)? 'a':'b');

//explain the type of data
console.log(typeof "Arushi Sharma");

// iife(Immendiately invoked function expression) we can call the function in the same timw
// (function(){
//     console.log("Arushi Sharma")
// })();

// function greet(){
//     console.log("Arushi Sharma");
// }
// greet();

// function greet(){
//     console.log(a+b);
// }
// greet();

function greet(){
    
}

