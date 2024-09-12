//for of 
// [{},{}] objects in arrays

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
    
}

const greetings="hello word!"
for (const i of greetings) {
    console.log(`each char is ${i}`)
}

//maps
const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITES STATES OF AMERICA")
map.set('AUS',"AUSTRALIA")
map.set('UAE',"UNITED ARAB EMIRATES")
console.log(map)

for (const key of map) {
    console.log(key)
    
}

//for key and value to be separately stored
for (const [key,value] of map) {
    console.log(key,':-',value)
}
//cant do like others
const myObject={
    'game1':'NFS',
    'game2':'RDR2',
    'game3':'GTA6',
    'game4':'MINECRAFT',
}
for (const it of myObject) {
    console.log(it)
}