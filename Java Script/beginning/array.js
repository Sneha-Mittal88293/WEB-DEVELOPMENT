const prompt = require("prompt-sync")();
var a = [];
var size = prompt();

for(var i = 1 ; i<=size ; i++){
    a[i] = prompt();
}
for(var i = 1 ; i<=size ; i++){
    console.log(a[i]);
}
