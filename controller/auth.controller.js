

import { loginService } from "../services/auth.services.js";


const saveToken = (res,token) => {
    return res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'strict',

    })
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const result = await loginService(email, password);
        console.log(result)
        if (result.validUser) {
            const x=await saveToken(res,result.token)
            console.log(x)
            res.status(200).json({ login: true, message: "Login Sucessful", user: result.user })

        } else {
            res.status(401).json({ login: false, message: "Invalid User" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ login: false, message: "Server Error" })
    }

}

export const verifiedUser = (req, res) => {
    res.status(200).json({ success: true, message: "Authorization Successfull", user: req.user })
}