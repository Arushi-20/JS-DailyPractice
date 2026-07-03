//call stack: It is a data structure that js uses to keep track of whcih function is currently running and what function should in next

//array
// let arr=new Array(ele0,ele1)
// let arr=Array(ele0,ele1)
// let arr=[ele1,ele2]
// let array=new Array(size of an array);
//1 dimensional array
// let arr=['hello','we','are','developer']
// console.log(arr);

//Methods of an array
// push: add the element to the end of the array
// const arr=["Arushi","Sharma"];
// arr.push("CSE","1")
// console.log(arr);

// //slice: select a part of an array and return the new array
// // //arr.slice(start,end)
// // arr=["Arushi","Sharma","CSE","1"]
// console.log(arr.slice(1,3));

// //toString(): converts an array to a string
// console.log(arr.toString());

// //shift(): remove the first element of an array and return the shift element(or the first element which is shifted)
// console.log(arr.shift());

// //map:creates a new array with result of calling function for every array element, applying the finction of each element of an existing array
// const arr1=[1,2,3,4]
// console.log(arr1.map(x => x*2));

// //pop: remove the last element
// console.log(arr1.pop());

//filter: creates an array filled with allarray elements that pass a test 
// console.log(arr.filter(word=>word.length>3));

// console.log(arr.length);

// console.log(arr1.filter(x => x>3));

// console.log(arr1.filter(x => x==2));

// console.log(arr1.findIndex(x => x==2));

// // console.log(arr1.forEach(arr));
// arr.forEach(x => console.log(x));


// console.log(arr1.includes(5));

// console.log(arr1.reverse());

//unshift : add the items in the array and return the length of the array
// console.log(arr1.unshift(5));

// arr2=['Arushi','Sharma']
// arr2.forEach(s => {
//     console.log("Hello "+s);
// })

// let myArr=[1,2,3]
// let r=myArr.concat(4,5,6)
// console.log(r);

// let myArr1=['Hi','How','are','you']
// console.log(myArr1.join(" ~ "));

// console.log(myArr1.reverse());

//splice returns the remove element
//arr.splice(startIndex, deleteCount,Add items)
// console.log(r.splice(1,3,'a','b','c','d'));

// console.log(r.sort());


//functions: regular, arrow and function expression
//regular
// function func(name, age){
//     console.log(name, age);
    
// }
// func("Arushi",22);

//arrow function
// const func=(name, age)=>{
//     console.log(name, age);
    
// }
// func("Arushi",22)

// function expression 
// const func=function(){
//     console.log("Arushi",22);
    
// }
// func()


//1
// function func(){
//     console.log("Hello");
// }
// func()

//2
// const func=()=>{
//     console.log("Hello");
    
// }
// func();

// //3
// function func(first, last, age){
//     console.log(`${first} ${last} is ${age} years old`);
    
// }
// func("Arushi","Sharma",22)



















