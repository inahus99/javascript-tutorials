
a = 670
if (true) {
    let a = 10
    const b = 9
    var c = 90

}
// console.log(a)
// console.log(b)
// console.log(c)

//***********scope levels */

function one() {
    const username = "harley"
    function two() {
        const website = "9gig"

        console.log(username)
    }
    // console.log(website)
    two()

}
one()

//if scope 

if (true) {
    const username = "myname"
    if (username === "myname") {
        const website = " quora"
        console.log(username + website)

    }
    // console.log(website)
    //   console.log(website)
}
addone(3)
function addone(value) {
    return value + 1
}




const addtwo = function addone(value) {
    return value + 1
}

addtwo(9)


