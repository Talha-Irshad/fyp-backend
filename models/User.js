const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports=mongoose.model('User',UserSchema)