import User from "../Models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginService = async (email, password) => {

    const user = await User.findOne({ email: email })

    if (user) {
        const passwordMatched = await bcrypt.compare(password, user.password)
        if (passwordMatched) {
            const token = jwt.sign({ email: email, role: user.role, _id: user._id }, process.env.JWT_SECRET_KEY)
            return {
                validUser: true,
                user: {
                    _id:user._id,
                    name:user.name,
                    role:user.role,
                    createdAt:user.createdAt,
                    updatedAt:user.updatedAt
                },
                token
            }
        } else {
            return {
                validUser: false
            }
        }
    } else {
        return {
            validUser: false
        }
    }

}