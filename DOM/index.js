// function change() {
//     // let ele=document.getElementsByTagName("h1")
//     // ele[0].innerText="Hello India"

//     // let ele1=document.getElementById("param")
//     // ele1.innerText="this is new param"
//     // ele1.style.backgroundColor="yellow"

//     // let ele2=document.getElementsByClassName("param")
//     // ele2[0].style.backgroundColor="pink"

//     // let ele=document.getElementById("image")
//     // let img=document.createElement("img");
//     // img.src="img1.webp";
//     // img.alt="Random image";
//     // img.style.width = "500px";
//     // img.style.height = "500px";
//     // image.prepend(img);

//     // let ele=document.getElementsByClassName("image1")
//     // ele[0].style.width="200px"
//     // ele[0].style.height="200px"
//     // ele[0].style.backgroundColor="pink"
//     // ele[0].style.backgroundposition="vertical"

//     // let container=document.getElementById("container")
//     // if(container.style.flexDirection=="column"){
//     //     container.style.flexDirection="row";
//     // }else{
//     //     container.style.flexDirection="column";
//     // }

// //     const container = document.getElementById("container");
// //     const btn = document.getElementById("btn");
// //     let isRow = true;
// //     btn.addEventListener("click", () => {
// //         if (isRow) {
// //             container.style.flexDirection = "column";
// //         } else {
// //             container.style.flexDirection = "row";
// //         }
// //         isRow = !isRow;
// // });

// }

// const container = document.getElementById("container");
//     const btn = document.getElementById("btn");
//     let isRow = true;
//     btn.addEventListener("click", () => {
//         if (isRow) {
//             container.style.flexDirection = "column";
//         } else {
//             container.style.flexDirection = "row";
//         }
//         isRow = !isRow;
// });
    

function clock(){
    let ele=document.getElementById("myclock")
    let date=new Date()

    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h === 0 ? 12 : h;

    let time=h%12+ ":" + m + ":" + s+ " "+ ampm

    setTimeout(()=>{
        clock()
    },1000)

    ele.innerText=time
}
clock()