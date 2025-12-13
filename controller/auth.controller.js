

import { loginService } from "../services/auth.services.js";
import jwt from 'jsonwebtoken'

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const chekvalidUser = await loginService(email, password);

        if (chekvalidUser.validUser) {
            const token = jwt.sign({ email: email, role: chekvalidUser.role, _id: chekvalidUser._id }, process.env.JWT_SECRET_KEY)
            await res.cookie("access_token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path: '/',
                sameSite: 'strict',

            })
            res.status(200).json({ login: true, message: "Login Sucessful", user: { role: chekvalidUser.role, _id: chekvalidUser._id,email:chekvalidUser.email } })

        } else {
            res.status(401).json({ login: false, message: "Invalid User" })
        }

    } catch (error) {
        res.status(500).json({ login: false, message: "Server Error" })
    }

}

export const verifiedUser=(req,res)=>{
    res.status(200).json({success:true,message:"Authorization Successfull"})
}