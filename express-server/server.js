const express = require("express");

const app = express();

//on get first argument is our location and second is your function inside function there is two argument one is request and second is response

//home route
app.get("/" , function(request , response){
    response.send("hello");
});

// contact route
app.get("/contact" , function(req , res){
    res.send("Contact me as: - snehamittal87@gmail.com");
});
// about
app.get("/about" , function(req , res){
    res.send("my name is sneha mittal , i am btech student");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
});