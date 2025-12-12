 import exprees from 'express'
import { loginController } from '../controller/auth.controller.js'
import { validator } from '../middleware/zod.validator.js'
import { userLoginSchema } from '../schema/auth.schema.js'

 const router=exprees.Router() 


 router.post('/login',validator(userLoginSchema),loginController) 

 export default router