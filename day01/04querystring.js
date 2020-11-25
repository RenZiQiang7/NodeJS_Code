const querystring=require('querystring');
console.log(querystring.parse('name=zhangsan&age=18'));
console.log(querystring.stringify({name:'李四',age:20}));