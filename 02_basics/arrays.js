const myArray=[1,2,3,"value",true]
console.log(myArray[3])

const myArray2=new Array(1,2,3,4,5)
console.log(myArray2)

//**********methods**************

myArray2.push(7)
console.log(myArray2)

myArray2.pop()
console.log(myArray2)

myArray.unshift(78)
console.log(myArray)

myArray2.shift()
console.log(myArray2)

console.log(myArray.includes(5))
console.log(myArray2.indexOf(3))

const newArr= myArray.join()
console.log(typeof(newArr))


//slice and splice

console.log("A",myArray)
const newA1=myArray.slice(1,3)
console.log(newA1)

console.log("B",myArray)
const newA2=myArray.splice(1,3)
console.log("C",myArray)
console.log(newA2)

//***push method */
const marvel_heros=["captainamerica", "ironman" , "wonderwomen"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
 console.log(marvel_heros[1][3]);


//cocat method
const allHeroes=marvel_heros.concat(dc_heros);
console.log(allHeroes)

//one more way
const all_new_heroes=[...marvel_heros,...dc_heros]
console.log(all_new_heroes)

const new_array=[1,2,3,[4,5],6,[7,8,[9,1],8],0]
const usable_anotherarray=new_array.flat(Infinity)
console.log(usable_anotherarray)

console.log(Array.isArray("hello"))
console.log(Array.from("string123"))
//unique case
console.log(Array.from({name:"myname"}))

//converting any set of elements in array
let score1 = 90
let score2 = 80 
let score3 = 56
console.log(Array.of(score1,score2,score3))

