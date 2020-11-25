const express=require('express');

const app=express();
const frontend=require('./routers/frontend')
const backend=require('./routers/backend')
app.use('/frontend',frontend);
app.use('/backend',backend);



app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})