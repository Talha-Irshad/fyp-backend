const express=require('express');

const router=express.Router();
const Employee=require('../models/Employee')


// GET all employees
router.get('/',async (req,res)=>{
    try{
        const employees= await Employee.find()
        res.json(employees)
    }catch(err){
        res.json({
            message:err
        })
    }
})

// GET a particular employee
router.get(`/:empid`,async (req,res)=>{
    try{
        const query=req.params.empid
        // console.log("Hi there-------------------->",query)
        const emp = await Employee.find({empid:query})
        res.json(emp)
    }catch(err){
        res.json({message:err})
        console.log(err)
    }
})


// POST an employee
router.post('/',async(req,res)=>{
    const emp=new Employee({
        empid:req.body.empid,
        name:req.body.name,
        department:req.body.department
    })
    try{
        const savedEmp=await emp.save()
        res.json(savedEmp)
    }catch(err){
        res.json({message:`${err}`})
        console.log(err)
    }
})

module.exports=router