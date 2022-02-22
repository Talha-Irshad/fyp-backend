const express=require('express')

const router=express.Router();
const User = require('../models/User')

router.get('/',async(req,res)=>{
    try{
        const user =await User.find()
        res.json(user)
    }catch(err){
        res.json({message:err})
        console.log(err)
    }
})

router.get('/:userid',async(req,res)=>{
    try{
        const query=req.params.userid
        const user =await User.find({userid:query})
        res.json(user)
    }catch(err){
        res.json({message:err})
        console.log(err)
    }
})

router.post('/',async (req,res)=>{
    const user=new User({
        userid:req.body.userid,
        name:req.body.name,
        fcmtoken:req.body.fcmtoken
    })
    try{
        const saveUser=await user.save()
        res.json(saveUser)
    }catch(err){
        res.json({
            message:err
        })
        console.log(err)
    }
})

module.exports=router