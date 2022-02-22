const express= require ("express");

const router=express.Router();
const Post= require('../models/Post')

router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})
router.get(`/:empid`,async (req,res)=>{
    try{
        const query=req.params.empid
        const posts = await Post.find({empid:query})
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})

router.get(`/post/state=:state`,async (req,res)=>{
    try{
        // const empIdQuery=req.params.empid
        const stateQuery=req.params.state
        const posts = await Post.find({"state.state":stateQuery})
        // console.log(req.params)
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})

router.post('/',async (req,res)=>{
    const post = new Post({
        empid:req.body.empid,
        date:req.body.date,
        state:req.body.state
    })
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:`${err}`})
        console.log(err)
    }
    
})

module.exports=router