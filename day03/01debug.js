const express=require('express');

const app=express();
//查询请求类型
app.get('/',(req,res)=>{
    res.send('get请求')
})
//新增请求类型
app.post('/',(req,res)=>{
    res.send('post请求')
})
//修改请求类型
app.put('/',(req,res)=>{
    res.send('put请求')
})
//删除请求类型
app.delete('/',(req,res)=>{
    res.send('delete请求')
})


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})