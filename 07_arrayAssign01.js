if(true){
    let message = "Hello";
    const PI = 3.1413;
}
console.log(message);  // Uncaught ReferenceError ReferenceError: message is not defined.
                      // Not allowed as variable "Message" & PI defined using let & const keyword hence it has blocked scoped.


 if (true) {
    var greet = "Good Morning"
    
 }                     

 console.log(greet);  // Allowed as variable "greet " defined using var keyword hence it has function scoped.