const express=require('express');
const fs=require('fs');
const app=express();

app.get('/',(req,res)=>{
    try {
        let data=fs.writeFileSync('./slakgnfaiosgna.txt');
        res.send(data);
    } catch (error) {
        throw new Error('不知道为毛，反正就是没读到内容')
    }
})
//异常中间件要写在路由后面
app.use((err,req,res,next)=>{
    console.log('有错误'+err.message)
    res.send("Error"+err.message);
})

//404中间件
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})