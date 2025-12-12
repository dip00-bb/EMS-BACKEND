import { loginService } from "../services/auth.services.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const token = await loginService(email, password);
        res.json({x:4})
    } catch (error) {
        console.log(error)
    }

}