const mongoose =require("mongoose")

const EmployeeSchema=mongoose.Schema({
    empid:{
        type:Number,
        required:true
    },
    name:{  
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Employees",EmployeeSchema)