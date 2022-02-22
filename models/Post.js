const mongoose=require("mongoose");

const StateSchema=mongoose.Schema({
    time:String,
    state:String
})

const PostSchema = mongoose.Schema({
    empid:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    state:[StateSchema]
})

module.exports=mongoose.model("Posts", PostSchema)