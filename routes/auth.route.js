 import exprees from 'express'
import { loginController, verifiedUser } from '../controller/auth.controller.js'
import { validator } from '../middleware/zod.validator.js'
import { userLoginSchema } from '../schema/auth.schema.js'
import { verifyUser } from '../middleware/auth.middleware.js'

 const router=exprees.Router() 


 router.post('/login',validator(userLoginSchema),loginController) 
 router.post('/verify',verifyUser,verifiedUser)

 export default router