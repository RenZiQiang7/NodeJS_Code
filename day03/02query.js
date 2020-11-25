const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})



app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})