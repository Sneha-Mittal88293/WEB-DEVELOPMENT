console.log("hello world");
//use es 6
const fs =require("fs");

fs.copyFileSync("file1.txt" , "file2.txt");

var superheroes = require("superheroes");
var myhero = superheroes.random();
console.log(myhero);