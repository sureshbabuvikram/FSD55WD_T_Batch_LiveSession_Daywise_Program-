import User from "../Models/user.schema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const registerUser =async(req, res)=>{
    try {
        const {username, email, password, role} = req.body
        const hashPassword = await bcrypt.hash(password , 10)
        // console.log("hashPassword", hashPassword);

        const newUser= new User({username, email, password:hashPassword, role})
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

         const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
         user.token= token
         await user.save()
        res.status(200).json({message:"Login Successful", token:token})


    } catch (error) {
        console.log(error);   
        res.status(500).json({error:'login Failed , Internal server error'})
    }
}

export const getUser=async(req,res)=>{
    try {
        const userId = req.user._id
        const user= await User.findById(userId)
        res.status(200).json({ message:"Authorized user", data:[user]})
    } catch (error) {
        console.log(error);
        res.status(500).json({err:" internal server server" })
    }
}