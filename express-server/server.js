const express = require("express");

const app = express();

//on get first argument is our location and second is your function inside function there is two argument one is request and second is response

app.get("/" , function(request , response){
    response.send("hello");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
});