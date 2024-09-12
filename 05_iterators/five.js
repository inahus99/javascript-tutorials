const coding=["js","rb","swift","cpp"]
// coding.forEach(  function (item) {
//     console.log(item)
// })

// coding.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr)
// })
 const mycoding=[
   {
    languagename:"javascript",
    languagefilename:"js"
   },
   {
    languagename:"ruby on rails",
    languagefilename:"rb"
   },
   {
    languagename:"golang",
    languagefilename:"go"
   }
 ]
 mycoding.forEach((item)=>{
    console.log(item.languagefilename)
 })
