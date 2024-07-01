//one way is using constructors , here singleton is formed , (object.create)
//another way is object literals 
const mysym=Symbol("key1")
const jsUser={
    name:"myname",
    "full name":"myname surname",
    [mysym]:"mykey1",
    age:18,
    place:"jaipur",
    email:"xyz@gmail.com",
    isLoggedIN:false
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser[mysym])

//value updatation/overwrite 
jsUser.email="xyz@chatgpt.com"
console.log(jsUser["email"])
// Object.freeze(jsUser)
console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello jsuser")
}
console.log(jsUser.greeting())

jsUser.greetingTwo=function(){
    console.log(`hello jsuser, ${this.name}`)
}
console.log(jsUser.greetingTwo())



//**********object constructors */
//const tinder=new Object();
const tinderUser={}
tinderUser.id='abc123'
tinderUser.name="Sam"
tinderUser.isloggedin=false

// console.log(tinderUser)

const regularUser={
email:"sammy@hotmail.com",
fullname:{
     username:{
        firstname:"andrew",
        lastname:"sean",
     }
},
status:"active",
}
console.log(regularUser.fullname.username.firstname)

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
// const obj3={obj1 , obj2}

// const obj3=Object.assign(obj1,obj2)
const obj3=Object.assign({}, obj1,obj2)
const obj4={...obj2,...obj1}
console.log(obj3)
console.log(obj4)

const users=[
   { ID:1,
   emailid:"hxry@gmail.com",
    name:"myname"
   }
]
//users[1].emailid
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('status'))


/******* objects destructure */
const course={
    coursename:"javascript tutorials",
    courseInstructor:"name",
    price:"99"

}
const{courseInstructor}=course
console.log(courseInstructor)

/*****json ***/
//{
   //"name":"myname"
   // "coursename":"javascript tutorials"
//}
//json file in array
/*[
    {},
    {},
    {},
]*/