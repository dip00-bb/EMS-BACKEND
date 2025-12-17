
import mongoose from "mongoose";
const departmentSchemea=mongoose.Schema({
    departmentName:{type:String,required:true},
    depertmentDescription:{type:String,required:true}

    // TODO 
    // Link with employee of that department
})

const Department=mongoose.model("Department",departmentSchemea)

export default Department