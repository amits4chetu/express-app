const path=require('path');
const express=require('express');
const requests=require('requests');
const app=express();
const port = process.env.port || 8080;

const webpath=path.join(__dirname,'../public');

app.use(express.static(webpath));

// app.get('/',(req,res)=>{
//     res.send("Hi Amit");
// });
app.get('/temp',(req,res)=>{
    // requests(

    // );
});

app.listen(port,()=>{
    console.log("Connected");
});