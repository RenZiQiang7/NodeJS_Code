const http = require('http');
const querystring=require('querystring');
const server = http.createServer();
server.on('request', (req, res) => {
    const arr = [];
    req.on('data', buffer => {
        arr.push(buffer);
    })
    req.on('end',()=>{
        let dataObj=querystring.parse(Buffer.concat(arr).toString());
        console.log(dataObj);
    })
})
server.listen(8080, () => {
    console.log('server is running at http://127.0.0.1:8080');
})