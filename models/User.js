const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    userid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
    },
    fcmtoken:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',UserSchema)