import Department from "../Models/Department.js"


export const createNewDepartment = async (data) => {
    try {
        const newDep = await Department.create(data)
        if (newDep) {
            return {
                success: true
            }
        } else {
            return {
                success: false
            }
        }
    } catch (error) {
        console.log("Something went wrong", error)
        return {
            success: false
        }

    }
}



export const getDepartmentList = async (req) => {
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    const skip = (page - 1) * limit


    try {
        const count = await Department.estimatedDocumentCount()
        const data = await Department.find({}).limit(limit).skip(skip)

        if (data) {
            return { success: true, data: data, totalData: count }
        }

    } catch (error) {
        return {
            success: false
        }
    }
} 



export const getDepartmentDetails=async(req)=>{
    try {
        const depId=req.params.id;
        const details=await Department.findById(depId);
        return {success:true,details:details}
    } catch (error) {
        return {success:false}
    }
}