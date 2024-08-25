//if condition loop

// if(condition==true){
//     // executed this
// }
// const isuserloggedin=true;
// if(isuserloggedin){

// }


//**********opertors*********//
// <=,<,>,>=,!=,==,===
//positive , negative both can be checked until statment is true

// if(2=='2'){
//     console.log("executed")
// }

// // const temperatureupdate=45
// const temperatureupdate=190
// if(temperatureupdate<90){
//     console.log("temperature in control")
// }
// else{
//     console.log("temperature is getting out of control")
// }



const score=200

if(score>100){
    const power="fly"
    console.log(`user power is ${power}`)
}
// console.log(`user power is ${power}`)
//  wont execute if const is used as (if)has a scope but in case of var it is executed as var doesnt follow scope

//implicit scope(executed in one line only)

const value=1000
if(value >500) console.log("test");

if(value<500){
    console.log("value is less than 500")
}
else if(value<700){
console.log("value is less than 700")
}
else if(value<120000){
    console.log("value is less than 120000")
    }
    else{
  console.log("value is much greater than expected")
    }

    const userLoggedIn=true;
    const debitCard=true;
//same for or and and 
    if(userLoggedIn && debitCard){
        console.log("user can access")
    }