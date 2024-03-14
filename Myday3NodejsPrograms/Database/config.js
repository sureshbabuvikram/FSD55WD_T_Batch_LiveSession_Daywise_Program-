import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// const mongoDBConnectionSrting= process.env.MONGODBCONNECTIONSTRING
const connectDB= async()=>{
    // const options = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   };
    try {
        // console.log("connection string",mongoDBConnectionSrting );
        const connection= await mongoose.connect(process.env.MONGODBCONNECTIONSTRING)
        console.log("Connected to the MongoDB");
        return connection;
    } catch (error) {
        console.log("Error",error);
    }

}

export default connectDB;