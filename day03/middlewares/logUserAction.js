// 导入
const fs = require('fs');


const logUser = (req, res, next) => {
    const actionObj = {};

    actionObj.ip = req.ip;
    actionObj.time=getNowTime();
    actionObj.url=req.path;
    actionObj.type=req.method;
    actionObj.userAgent=req.headers['user-agent'];
    console.log(req);

    req.body=actionObj;
   
    let text=`${actionObj.ip}/${actionObj.time}/${actionObj.url}/${actionObj.type}/${actionObj.userAgent}\r`
    fs.appendFile(`./logs/${getFileName()}`,text,err=>{
        console.log(err);
    })
    next()
}

function getFileName(){
    const d = new Date()
    return `${d.getFullYear()}${d.getMonth()+1}${d.getDate()}.txt`;
}

function getNowTime() {
    const d = new Date()
    return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}/${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
module.exports=logUser;