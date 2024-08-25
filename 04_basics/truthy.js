 const userEmail="user@myemail.com"
//  const userEmail=[]

//  if(userEmail.length ===0){
//     console.log("email id not  found");
// }


if(userEmail){
    console.log("email id found");
}
else{
    console.log("emailId no found");
}

//default false values
// null, undefined, NaN, false, 0, -0, bigint

//truthy values
//"0" , "false" ,"",[],{} , function(){}



//*********checking empty objects */
// const myObj={}
// if(Object.keys(myObj).length===0){
// console.log("empty object")
// }


// nullish coalescing operator (??):null undefined
let val1
// val1=5 ?? 10
// val1=null ??10
// val1 =undefined ?? 15
 val1=null ?? 10 ??15

console.log(val1)

//ternary operator 
//conditon ? true:false

const iceTeaPrice=100
iceTeaPrice>=80 ?console.log("less than 80"):console.log("more than 80")
