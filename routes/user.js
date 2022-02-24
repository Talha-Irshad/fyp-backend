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


router.post('/',async (req,res)=>{
    const checkUser=await User.find({token:req.body.token})
    if(checkUser==[]){
        res.json({
            message:"user already registered"
        })
    }else{
        const user=new User({
            token:req.body.token
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
    }
})

module.exports=router