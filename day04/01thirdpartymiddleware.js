const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))

app.post('/',(req,res)=>{
    res.send(req.body);
})



app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})