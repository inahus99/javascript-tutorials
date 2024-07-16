const user={
username:"name",
price:"999",
welcomemessage:function(){
console.log(`${this.username},welcome to this website`)
console.log(this)
}
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)

function chai(){
    let username="ray"
    console.log(this.username)
}
chai()

const chaiIs=function (){
    let username="ray"
    console.log(this.username)
}
chaiIs()


const chai1= () =>{
    let username="ray"
    console.log(this.username)
}
chai1()


// const addtwo = (num1,num2) =>{
//     return num1+num2
// }

// console.log(addtwo(7,8))

// const addtwo = (num1,num2) =>  num1+num2

const addtwo = (num1,num2) => ({username:"name"})


console.log(addtwo(7,8))

