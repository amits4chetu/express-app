const express=require('express');
const app=express();
const port=8080;

app.get('/',(req,res)=>{
    res.send('Welcome to Home');
});
app.get('/about',(req,res)=>{
    res.send('Welcome to about');
});
app.get('/contact',(req,res)=>{
    res.send('Welcome to contact');
});
app.get('/profile',(req,res)=>{
    res.send('Welcome to profile');
});
app.listen(port,()=>{
    console.log('Connected');
});