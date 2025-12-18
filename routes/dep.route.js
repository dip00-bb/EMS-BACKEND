import express from 'express' 
import { newDepartment } from '../controller/departmet.controller.js'

const router=express.Router()

router.post('/add-depertment',newDepartment)

export default router