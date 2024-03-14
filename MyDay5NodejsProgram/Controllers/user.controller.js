import User from "../Models/user.schema.js";
import bcrypt from 'bcrypt'

export const registerUser =async(req, res)=>{
    try {
        const {username, email, password} = req.body
        const hashPassword = await bcrypt.hash(password , 10)
        console.log("hashPassword", hashPassword);

        const newUser= new User({username, email, password:hashPassword})
        await newUser.save()

        res.status(200).json({message:"Register Successful" , data: newUser})
        
    } catch (error) {
        console.log(error);   
        res.status(500).json({error:'Register Failed , Internal server error'})
    }
}

export const loginUser= async(req, res)=>{

    try {
         const {email, password} = req.body
         const user= await User.findOne({email})
         if(!user){
            return res.status(401).json({message:"User Not Found"})
         }
         const passwordMatch = await bcrypt.compare(password, user.password)
         if(!passwordMatch){
            return res.status(401).json({message:"Invalid password"})
         }

        res.status(200).json({message:"Login Successful"})


    } catch (error) {
        console.log(error);   
        res.status(500).json({error:'login Failed , Internal server error'})
    }
}
