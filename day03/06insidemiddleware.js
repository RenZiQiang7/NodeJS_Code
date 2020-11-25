const express=require('express');

const app=express();
//静态资源服务器
// app.use('/asdjalkfjakljfkla',express.static('public'))
//中间件接收json数据,存储在req.body中
// app.use(express.json())
//中间件接收post数据,存储在req.body中
app.use(express.urlencoded({extended:false}));

app.post('/',(req,res)=>{
   
    res.send(req.body);
})



app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})