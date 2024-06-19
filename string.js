// const name="operation"
// const repoCount=5
// console.log(name+repocount+"value")
// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

//another way of declaring string
const gameName=new String('serverisdefined')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.charAt(4))
console.log(gameName.indexOf('e'))

// const valueName = gameName.substring(0,4)
const valueName = gameName.slice(0,-4)
console.log(valueName)

const newstring="          codeblock      "
console.log(newstring)
console.log(newstring.trim())


const url="https://mywebsite/%20liveserver"
console.log(url.replace('%20','-'))
console.log(url.includes('web'))

console.log(gameName.split('--'))