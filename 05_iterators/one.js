// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
    
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value :${i}`)
    for (let j = 0; j <=10 ; j++) {
      //  console.log(`inner loop value :${j} and the value of outer loop is ${i}`)
        
    }
   
    
}


let myArray=["flash", "batman" ,"superman"]

for(let index=0;index<myArray.length;index++){
    const element =myArray[index]
   // console.log(element)
}

//*******break and continue********

for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log(`detected is 5`)
        // break
        continue
    }
   console.log(`value of i is ${index}`)
    
}