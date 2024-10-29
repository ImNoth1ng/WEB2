const express = require("express");
const path = require("path");
const router=express.Router();

router.get('/page1', (res,req)=>{
    res.sendFile(path.join(__dirname,'../','/page1.html'))
});

module.exports=router;