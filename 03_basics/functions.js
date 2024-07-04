function myName(){

console.log("M")
console.log("Y")
console.log("N")
console.log("A")
console.log("M")
console.log("E")
}

//declaring a function 

function addtwonumber(num1,num2){
    // console.log(num1+num2)
    const result=num1+num2
    return result
    //return num1+num2
}
const result=addtwonumber(13,8)
console.log("result :",  result)

//declaring another function 
function checkUserLoggedIn(username){
    if(undefined === username){
        console.log("enter username")
        return
    }
    return `${username} just logged in`

}
console.log(checkUserLoggedIn("Sam Andrew "))
console.log(checkUserLoggedIn("andurey "))

function CalculateCartPrice(Val1,Val2,...num1){
return num1
}
console.log(CalculateCartPrice(200,400,600,1200))  

//objects in function

const user={
    username:"Aurobindo",
    price:199
}

function handleObject(anyobject)
{
  console.log(`usrename is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"Ravindra",
    price:899
})
 const newarray=[200,300,400,500]
 function returnsecondvalue(getarray){
    return getarray[1]
 }
 console.log(returnsecondvalue(newarray))
 console.log(returnsecondvalue([134,890,67,45,90]))