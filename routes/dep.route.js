import express from 'express' 
import { newDepartment } from '../controller/departmet.controller.js'
import { validator } from '../middleware/zod.validator.js'
import { departmentSchema } from '../schema/department.schema.js'

const router=express.Router()

router.post('/add-depertment',validator(departmentSchema), newDepartment)

export default router