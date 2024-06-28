// let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toString())

// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

// console.log(typeof(myDate))

// let myCreateDate= new Date(2023, 0, 4)
// console.log(myCreateDate.toDateString())

// let myCreateDate= new Date("2007-11-03")
// console.log(myCreateDate.toDateString())

let timeStamp=Date.now()
console.log(Math.floor(Date.now()/1000))

// console.log(myCreateDate.getTime())

let newDate= new Date()
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getMonth()+1)

//string interpolation  `${(newDate.getDay()} and time is `

newDate.toLocaleString('default',{
    weekday:"long",
})