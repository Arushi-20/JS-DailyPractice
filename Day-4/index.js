// function DataPrint(){
//     // let ele=document.getElementById("color-dropdown")
//     // let res=document.getElementById("result")

//     // ele.addEventListener("change", (event)=>{
//     //     let selectedValue = event.target.value
//     //     res.textContent=`Selected Data: ${selectedValue}`
//     // })


//     let ele= document.getElementById("dropdown-btn")
//     let res= document.getElementById("dropdown-content")

//     ele.addEventListener('Click',()=>{
//         res.classList.toggle("hidden")
//     })

//     window.addEventListener('Click',(event)=>{
//         if(!ele.contains(event.target)){
//             res.classList.add('hidden')
//         }
//     })

// }
// DataPrint()


//first class function: functions which get treated as a variable. it can be passed as an argument to other functions, can be returned by another function and assigned as a value to a variable
// const foo=function(){
//     console.log("Hello World");
    
// }
// foo();


//higher order function
// function which receives another function as an argument or return another function
// const foo = function () {
//     return function () {
//         console.log("Arushi Sharma");
//     }
// }
// foo()();


// let arr=[[1,2,3],[4,5,6],[7,"Arushi",9]]
// let oneD=[];
// let arr1=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr);
// console.log(arr[2][1]);
// console.log(arr1[2][1]);
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         oneD.push(arr[i][j]);
//     }
// }
// console.log(oneD);

// for (const element of arr) {
//     for (const element2 of element) {
//         oneD.push(element2);
//     }
// }
// console.log(oneD);

// let arr2=[[1,2,3],[4,[23,45,67],5,6],[7,8,9]]
// console.log(arr2[1][1][1]);
// console.log(arr2.pop());


let arr= new Array(3)

for(let i=0;i<arr.length;i++){
    arr[i]=new Array(3).fill(1)
}
console.log(arr);

let arr1=new Array(2)(3)
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j]=new Array(2)(3).fill(1)
    }
}
console.log(arr1);










