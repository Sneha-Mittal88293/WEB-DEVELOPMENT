const prompt = require("prompt-sync")();
var a = 0 ;
var b = 1 ;
var n = prompt();
function fabonacci(a , b){
   for(var i =b ; i<n ; i++){
     var c = a+ b;
    console.log(c);
    a = b;
    b =c
   }
}
console.log(a);
console.log(b);
fabonacci(a , b);
  

