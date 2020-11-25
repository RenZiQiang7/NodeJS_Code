const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer();
server.on('request',(req,res)=>{
    let pathname=req.url;
    pathname=pathname==='/'?'/index.html':pathname;
    let filename=path.join(__dirname,'public',pathname);
   
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end('server internal error');
        }else{
            res.end(data);
        }
    })
});
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})