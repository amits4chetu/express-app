const path=require('path');
const express=require('express');
const requests=require('requests');
const app=express();

const webpath=path.join(__dirname,'../public');

app.use(express.static(webpath));

// app.get('/',(req,res)=>{
//     res.send("Hi Amit");
// });
app.get('/temp',(req,res)=>{
    // requests(

    // );
});

app.listen(8080,()=>{
    console.log("Connected");
});