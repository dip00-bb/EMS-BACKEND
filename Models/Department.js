
import mongoose from "mongoose";
const departmentSchemea=new mongoose.Schema({
    departmentName:{type:String,required:true},
    depertmentDescription:{type:String,required:true}

    // TODO 
    // Link with employee of that department
},{timestamps:true})

const Department=mongoose.model("Department",departmentSchemea)

export default Department