//types of datatypes

//A primtitve-:
// string datatype
let score = "string"

//number datatype
let num = 567 

// boolean 
let assumption = Boolean(1)

// null 
let forecast = null

// undefined
let arr = undefined

//symbol 
 const sym = Symbol("foo");


//bigint
const alsoHuge = BigInt(9007199254740991);
// console.log(typeof(alsoHuge))
// console.table([score , num, assumption,forecast,arr,alsoHuge,sym])

//B non primitive/reference
//array,objects,functions
const fruits=["mangoes","apples","oranges"];


let myObj={
    name:"suhani",
    year:2,

}
const myFunction=function(){
    console.log("myname")
}
console.log(typeof(myObj))
console.log(typeof(fruits))
console.log(typeof(myFunction))
