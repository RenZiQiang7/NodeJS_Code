const fs=require('fs');
// fs.writeFile('./a.txt','lyfsb 老鸭粉丝煲',err=>{
//     if(err!==null){
//         console.log(err);
//     }
// })

// fs.readFile('./a.txt','utf8',(err,data)=>{
//     console.log(err+'       '+data);
// })
// console.log(fs.existsSync('../a.txt'));
fs.stat('./a.txt',(err,stats)=>{
    console.log(stats.isDirectory());
})