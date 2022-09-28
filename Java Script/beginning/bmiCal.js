const prompt = require("prompt-sync")();


function calculateBmi(weight , height){
    var cal = Math.floor(weight/(height*height));
    return cal;
}
var bmi = calculateBmi(65 , 1.8);
console.log(bmi);