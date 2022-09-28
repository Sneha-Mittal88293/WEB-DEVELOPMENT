const prompt = require("prompt-sync")();
var dogAge = prompt();
var humanAge = ((dogAge-2)*4) +21;
console.log(humanAge);