import User from "../Models/User.js"

export const loginService = async (email,password)=>{
    console.log("Email passed")
    const user=await User.findOne({email:email})
    if(user){
        console.log("User exist")
    }else{
        console.log("Not user ")
    }
    return user

}