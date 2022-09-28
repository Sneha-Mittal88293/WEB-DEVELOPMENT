const prompt = require("prompt-sync")();
var tweet = prompt("What you want to write");
len = tweet.length;
console.log("enter word is" + len + "remaining is" + (250-len));