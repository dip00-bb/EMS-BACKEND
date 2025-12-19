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

export const getDepartmentList = async () => {
    try {
        const data = await Department.find({})
        if (data) {
            return { success: true, data: data }
        }
    } catch (error) {
        return {
            success: false
        }
    }
}