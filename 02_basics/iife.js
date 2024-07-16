//immediately invoked function execution

(function chai(){
    console.log('DB CONNECTED')

}) ();
// chai() traditional method


//arrow function in iife
(() =>{
    console.log('DB RECONNECTED')
})();

//with arugument and parameter
((name) =>{
    console.log(`DB RECONNECTED ${name}`)
})("username");