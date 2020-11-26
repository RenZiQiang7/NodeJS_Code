const express=require('express');
const cookieParser=require('cookie-parser');
const e = require('express');

const app=express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    if(req.cookies.username){
        console.log(req.cookies);
        res.send('欢迎您,'+req.cookies.username);
    }else{
        //有效期一天
        res.cookie('username','马保国',{maxAge:86400*1000});
        res.send('第一次登录，已将您加入浑元形意太极拳部门');
    }
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})