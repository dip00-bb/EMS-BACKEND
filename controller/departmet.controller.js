import redis from "../config/redis.js"
import { createNewDepartment, getDepartmentDetails, getDepartmentList, updateDepartmentDetails } from "../services/department.services.js"


export const newDepartment = async (req, res) => {

    const result = await createNewDepartment(req.body)
    if (result.success) {
        res.status(200).json({ success: true, message: "Department Created" })
    } else {
        res.status(500).json({ success: false, message: "Please try again" })
    }
}

export const getDepartment = async (req, res) => {

    // hitted url will be the key 
    const cachedKey = req.url

    // try to get the cached data
    // const cachedData = await redis.get(cachedKey)

    // if cached data exit return data from here
    // if (cachedData) {
    //     const data = JSON.parse(cachedData)
    //     return res.status(200).json({ success: true, departmentList: data, message: "Data fetched successfully", from: "redis" })
    // }

    // else query on the database
    const result = await getDepartmentList(req);

    if (result.success) {

        // after getting the data save it in the cache
        await redis.set(cachedKey, JSON.stringify(result.data))
        await redis.expire(cachedKey, 10)

        return res.status(200).json({ success: true, departmentList: result.data, message: "Data fetched successfully", totalData: result.totalData, from: "query" })

    } else {
        return res.status(500).json({ success: false, departmentList: [], message: "Failed to fetch data" })
    }
}

export const departmentDetails = async (req, res) => {

    const result = await getDepartmentDetails(req)
    if (result.success) {
        res.status(200).json({ success: true, message: "Successful", departmentDetails: result.details })
    } else {
        res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

export const updateDetails = async (req, res) => {
    const result = await updateDepartmentDetails(req);

    if (result.success) {
        res.status(200).json({ success: true, message: "Department Updated" })
    } else {
        res.status(500).json({ success: false, message: "Please try again" })
    }
}