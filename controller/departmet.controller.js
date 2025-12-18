import { createNewDepartment } from "../services/department.services.js"


export const newDepartment=async(req,res)=>{
    const result=await createNewDepartment(req.body)
    if(result.success){
        res.status(200).json({success:true,message:"Department Created"})
    }else{
        res.status(500).json({success:false,message:"Please try again"})
    }
}