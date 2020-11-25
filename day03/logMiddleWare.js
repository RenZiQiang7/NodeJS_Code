// 导入
const express = require("express");
const app = express();

// 使用使用自定义的中间件接收post数据
const logUser = require("./middlewares/logUserAction");
app.use(logUser);

// 路由
app.post("/post", (req, res) => {
   res.send(req.body);
});

// 启动
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});
