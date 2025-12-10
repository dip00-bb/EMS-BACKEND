import { connectToDb } from "./config/db.js"
import User from "./Models/User.js"
import bcrypt from 'bcrypt'

const adminRegister=async ()=>{
    try {
        connectToDb()
        const hash=await bcrypt.hash("admin",10)
        const newUser= new User({
            name:"admin",
            email:"admin@gmail.com",
            password:hash,
            role:"admin"
        })

        await newUser.save()
    } catch (error) {
        console.log(error)
    }
} 

adminRegister()


