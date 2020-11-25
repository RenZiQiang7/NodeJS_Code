const express=require('express');
const router=express.Router();


router.get('/register.html',(req,res)=>{
    res.send('后台注册页')
})

router.get('/index.html',(req,res)=>{
    res.send('后台首页首页')
})

module.exports=router;