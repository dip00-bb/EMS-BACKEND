import { loginService } from "../services/auth.services.js";
import jwt from 'jsonwebtoken'
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const chekvalidUser = await loginService(email, password);

        if (chekvalidUser.validUser) {
            const token = jwt.sign({ email: email, role: chekvalidUser.role }, process.env.JWT_SECRET_KEY)

            await res.cookie("access_token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: 'none',
                secure: true
            })
            res.status(200).json({ login: true, message: "Login Sucessful" })

        } else {
            res.status(401).json({ login: false, message: "Invalid User" })
        }

    } catch (error) {
        res.status(500).json({ login: false, message: "Server Error" })
    }

}