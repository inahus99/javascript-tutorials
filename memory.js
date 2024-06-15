// stack and heap memory 
 

// stack memory is used in primitive datatype like bigint, int, strings,symbol etc 

// heap memory is used in non primitve datatypes like array , objects and functions 

// stack memory allocates a copy (means first copy is made and then changes are done)
// heap memory uses pass by reference(means changes are done in original data)

let variableName="captainAmerica"
let anothervariableName= variableName
 anothervariableName="Ironman"
 console.log(anothervariableName)
 console.log(variableName )

 // pass by refernce 
  let user1={
    email:"xyz5@yahoo.com",
    upi:"xyz@ybl",
  }

  let user2 =user1

  user2.email="xyz@google.com"
  console.log(user1.email)
  console.log(user2.email)
