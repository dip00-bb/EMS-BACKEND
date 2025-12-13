import User from "../Models/User.js"
import bcrypt from 'bcrypt'
export const loginService = async (email, password) => {

    const user = await User.findOne({ email: email })

    if (user) {
        const passwordMatched = await bcrypt.compare(password, user.password)
        if (passwordMatched) {
            return {
                validUser: true,
                role:user.role,
                _id:user._id,
                
            }
        } else {
            return {
                validUser: false
            }
        }
    } else {
        return {
            validUser:false
        }
    }

}