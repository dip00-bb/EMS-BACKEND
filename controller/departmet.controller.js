import { createNewDepartment, getDepartmentList } from "../services/department.services.js"


export const newDepartment = async (req, res) => {
    const result = await createNewDepartment(req.body)
    if (result.success) {
        res.status(200).json({ success: true, message: "Department Created" })
    } else {
        res.status(500).json({ success: false, message: "Please try again" })
    }
}

export const getDepartment = async (req, res) => {
    const result = await getDepartmentList();
    if (result.success) {
        res.status(200).json({ success: true, departmentList: result.data, message: "Data fetched successfully" })
    } else {
        res.status(500).json({ success: false, departmentList: [], message: "Failed to fetch data" })
    }
}