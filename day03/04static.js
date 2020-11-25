const express=require('express');

const app=express();


app.use('/abcdefghijklmnopqrstuvwxyz',express.static('public'))


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})