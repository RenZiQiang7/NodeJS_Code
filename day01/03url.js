const url= require('url');
const href='http://www.xxx.com:8080/pathname?id=100#bbb';
console.log(url.parse(href,true));
console.log(url.resolve('http://www.baidu.com/pages/abc/','bar'));