//promises function : .then and .catch 
//.then: if you want to access the response 
// .catch: if you want to handle the error
// promises represents the eventual completion or failure of an asysnchronous operation and its resulting value.
//takes two parameters resolve and reject, if we are getting success response then we will use resolve to give response, if error comes then we will use reject to give error

//in async funtions we always use api
// async function fetchData(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/photos");
//     let res = await data.json();
//     console.log(res);
// const filterData= res.filter(result=>res.title== 'reprehenderit est deserunt velit ipsam')
// console.log(filterData);

// }
// fetchData();

const userIds=[1,2,3,4,5]
const ele=document.getElementById("users")

async function fetchUsersData(){
    try{
        const promiseArray= userIds.map(async (id) =>{
            const response= await fetch


            

        })
        const response= await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed API")
        }
        const userData=await Promise.all(userIds)
        const cards=userData.map(user=>{return `
        <li class="user-card">
        <h3>${user.name}</h3>
        <h3>${user.email}</h3>
        </li>
        `})
        
        
    }
    catch(error){
        console.log("Data not fetched", error);
    }
}
fetchUsersData()