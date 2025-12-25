import express from 'express'
import { departmentDetails, getDepartment, newDepartment } from '../controller/departmet.controller.js'
import { validator } from '../middleware/zod.validator.js'
import { departmentSchema } from '../schema/department.schema.js'
import { verifyUser } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/add-depertment', verifyUser, validator(departmentSchema), newDepartment)
router.get('/get-department', verifyUser, getDepartment)
router.get('/department-details/:id',verifyUser,departmentDetails)


export default router