import jwt from 'jsonwebtoken'
import User from '../Models/User.js'


export const verifyUser = async (req, res, next) => {

    try {
        const token = req?.headers?.cookie.replace("access_token=", "")
        if (!token) {
            res.status(401).json({ success: false, message: "Unauthorized Access" })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if (!decode) {
            res.status(401).json({ success: false, message: "Unauthorized Access" })
        }

        const user = await User.findById({ _id: decode._id }).select('-password');

        if (!user) {
            res.status(401).json({ success: false, message: "Unauthorized Access" })
        }

        req.user = user
        next()

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}