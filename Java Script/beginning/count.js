const prompt = require("prompt-sync")();
var tweet = prompt("What you want to write");
var len = tweet.slice(0 ,250);
console.log("enter word is" + len.length + "remaining is" + (250-len.length));