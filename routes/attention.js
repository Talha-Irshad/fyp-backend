const express=require('express')

const { initializeApp } = require('firebase-admin/app');
const { getMessaging } = require('firebase-admin/messaging');
const serviceAccount=require('../key/fyp-frontend-ba05d-firebase-adminsdk-9v0mt-d9fe7481f1.json')
var admin = require("firebase-admin");

const User=require('../models/User')
const Employee=require('../models/Employee')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const router=express.Router()


router.get('/:empid', async(req,res)=>{
    const token=[]
    const user= await User.find()
    user.forEach((el)=>{
        token.push(el.token)
        console.log(el.token)
    })
    
    const query=req.params.empid
    const employee=await Employee.find({empid:query})
    const name=employee[0].name
    
    const message = {
        notification:{
            title:"Attention",
            body:`employee ${name} might not be in the right mood. Go check on him `
        },
        tokens: token,
      };
      
      try{
          getMessaging().sendMulticast(message)
            .then((response) => {
              if (response.failureCount > 0) {
                const failedTokens = [];
                response.responses.forEach((resp, idx) => {
                  if (!resp.success) {
                    failedTokens.push(registrationTokens[idx]);
                  }
                });
                console.log('List of tokens that caused failures: ' + failedTokens);
              }
            });
            console.log("message sent")
            res.json({
                message:"Sent"
            })
      }catch(err){
            res.json({message:err})
      }
})

module.exports=router