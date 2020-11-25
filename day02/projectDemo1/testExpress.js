const express=require('express');
const path=require('path');
const querystring=require('querystring');
const fs=require('fs');
const server=express();
server.get('/',(req,res)=>{
    res.send('好想爱这个世界啊')
})
server.get('/html5',(req,res)=>{
    res.end('海底')
})
server.post('/post',(req,res)=>{
    let pathname=req.url;
     pathname=pathname==='/'?'/index.html':pathname;
    if(pathname!=='/favicon.ico'){
        let filepath=path.join(__dirname,'public',pathname);
        let arr = [];
       
        req.on('data', buffer => {
            arr.push(buffer);
        });

        req.on('end', () => {
            let buffer = Buffer.concat(arr);
            let post = querystring.parse(buffer.toString());
            console.log(post);
            let str=`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <div>
                    name:${post.name}
                    sex:${post.age}
                </div>
            </body>
            </html>
            `;

            fs.writeFile(filepath,str,err=>{
                console.log(err);
            })


            fs.readFile(filepath,'utf8',(err,data)=>{
                if(err){
                    res.statusCode=404;
                    res.send('找不见');
                }else{
                    res.send(data);
                }
            })
        });
      
        
       
    }
})
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})