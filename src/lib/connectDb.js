import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/LiveFree")

        console.log("Your Database is connected")
        
    }
    catch(err){
        console.log(err,"this is in error block")
    }
}

export default connectDB;