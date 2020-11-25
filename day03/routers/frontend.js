const express=require('express');
const router=express.Router();

router.get('/login.html',(req,res)=>{
    res.send('前台登录页')
})
//新增请求类型
router.get('/register.html',(req,res)=>{
    res.send('前台注册页')
})

module.exports=router;