// let x=5;
// if(x>10){
//     console.log("x is greater than 10");
// }
// else{
//     console.log("x is smaller than 10");
// }
// let day=parseInt(prompt("enter your number"));
// switch(day){
//     case 1: day="monday"
//     console.log("monday");
//     break
//      case 2: day="tuesday"
//       console.log("tuedsday");
//     break
//      case 3: day="wednesday"
//       console.log("wednesday");
//     break
//      case 4: day="thursday"
//       console.log("thursday");
//     break
//     default:"invalid number"
//      console.log("this is invalid choice");
    

// }
// console.log(day);
// let month= parseInt(prompt("enter the month name"));
// switch(month){
//     case 1:
//         console.log("january");
//     break
//     case 2:
//         console.log("february");
//     break
//     case 3:
//         console.log("march");
//     break
//     case 4:
//         console.log("april");
//     break
//     case 5:
//         console.log("may")
//     break
//     default:"invalid number"
    

// }

// let marks=parseInt(prompt("enter the marks of student"));
// switch(true){
//     case(marks=10 || marks<10) :
//         console.log("your grade is e");
//         break;
//     case(marks>10 && marks<=30):
//         console.log("your grade is d");
//         break;
//     case(marks>30 && marks<=50):
//         console.log("your grade is c");
//         break;
//     case(marks>50 && marks<=70):
//         console.log("your grade is b");
//         break;
//     case(marks>70 && marks<=100):
//         console.log("your grade is a");
//         break;
//     default:
//         console.log("wrong choice");
// }


// let num=5
// for(let i=1; i<=num; i++){
//     console.log("hello" ,i);

// }

// object always takes value in form of key value pair
// let obj={
//     "name": "Amit",
//     "age": 23,
//     "email":"kdhariwal44@gmail.com"

// }
// console.log(obj);
//  for(let key in obj){
//      console.log(`${key} = ${obj[key]}`);
//  }

// let num=5;
//  do{
//     num=num+1;
    
//  }
//  while(num<10);
//  console.log(num);

// let str="we  are developer"
// let res= str.indexOf("developer");

// // finding a value which does not exist in string results as -1;
// let res1=str.lastIndexOf("developer");
// console.log(res);
// console.log(res1);

// let res3=str.indexOf("developer",15);
// console.log(res3);

// var str1="hello";
// var str2="world";
// var res2=str1.concat(str2);
// console.log(res2);

// var name="khushi dhariwal";
// var newName=name.slice(5,9);
// var newName1=name.slice(-1,-8);
// console.log(newName1);
// console.log(newName);

// var name1=" my name is khushi";
// res1=name1.replace("name","khushi");
// console.log(res1);

//replaceall
// console.log(name1.trim());
// var name="you will be an amazing developer";

// var nameList=name.split(" "); // it will split if there is space then in words otherwise in letterws with indexing
// console.log(nameList);

// var newMessage= "PrepBytes";
// console.log(newMessage.length);