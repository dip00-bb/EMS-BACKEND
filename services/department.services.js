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