const express=require('express');
const cookieSession=require('cookie-session');
const e = require('express');
const app=express();
app.use(cookieSession({
    name:'sessionId',
    secret:'hioweafgnrwghioen',
    maxAge:20*60*1000
}))
app.get('/',(req,res)=>{
    if(!req.session['viewCount']){
        req.session['viewCount']=1;
    }else{
        req.session['viewCount']++;
    }

    res.send('当前第'+req.session['viewCount']+"次浏览")
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})